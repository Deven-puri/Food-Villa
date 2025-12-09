import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestrauntsMenu from "../utils/useRestraurentsMenu";
const RestaurantsMenu = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const { resId } = useParams();
  const restInfo = useRestrauntsMenu(resId || "");
  
  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const res = await fetch(
        `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId=${resId}`
      );
      const json = await res.json();
      console.log("Menu API Response:", json);

      const cards = json?.data?.cards || [];

      // Find restaurant info
      const restaurantCard = cards.find(
        (c: any) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
      const restaurantInfo = restaurantCard?.card?.card?.info;

      // Find menu items using optional chaining
      const groupedCard = cards.find((c: any) => c?.groupedCard)?.groupedCard;
      const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const items: any[] = [];
      regularCards.forEach((card: any) => {
        const itemCards = card?.card?.card?.itemCards;
        if (itemCards) {
          itemCards.forEach((item: any) => {
            if (item?.card?.info) {
              items.push(item.card.info);
            }
          });
        }
      });

      setMenuItems(items);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  if (restInfo === null || !restInfo) return <Shimmer />;

  if (restInfo?.error) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Oops!</h1>
        <p>{restInfo.error}</p>
        <p><strong>Restaurant ID:</strong> {resId}</p>
        <p>Go to home page and click on a restaurant card.</p>
        
        {restInfo.availableIds && (
          <div style={{ marginTop: 20, background: "#f4f4f4", padding: 15 }}>
            <h3>Try these IDs:</h3>
            <ul>
              {restInfo.availableIds.map((id: any) => (
                <li key={id}>
                  <a href={`/restaurants/${id}`}>{id}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } =
    restInfo;

  return (
    <div style={{ padding: 20 }}>
      <h1>{name}</h1>
      {cloudinaryImageId && (
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
          style={{ width: 300, borderRadius: 10, marginBottom: 20 }}
        />
      )}
      <p><strong>Cuisines:</strong> {cuisines?.join(", ")}</p>
      <p><strong>Cost for Two:</strong> {costForTwo}</p>
      <p><strong>Rating:</strong> {avgRating} ⭐</p>
      <p><strong>Delivery Time:</strong> {sla?.slaString || sla?.deliveryTime}</p>
      
      <h2>Menu</h2>
      {menuItems?.length > 0 ? (
        <div>
          {menuItems.map((item, index) => (
            <div key={`${item?.id}-${index}`} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
              <h3>{item?.name}</h3>
              <p>₹{(item?.price || item?.defaultPrice) / 100}</p>
              {item?.description && <p style={{ fontSize: '14px', color: '#666' }}>{item?.description}</p>}
            </div>
          ))}
        </div>
      ) : (
        <p>No menu items available</p>
      )}
    </div>
  );
};

export default RestaurantsMenu;
