import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestrauntsMenu from "../utils/useRestraurentsMenu";
import RestaurantCategories from "./RestraurentsCategories";

const RestaurantsMenu = () => {
  const [menuCategories, setMenuCategories] = useState<any[]>([]);

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
        (c: any) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
      const restaurantInfo = restaurantCard?.card?.card?.info;

      // Find menu items grouped by categories
      const groupedCard = cards.find((c: any) => c?.groupedCard)?.groupedCard;
      const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const categories: any[] = [];
      regularCards.forEach((card: any) => {
        const cardData = card?.card?.card;
        if (cardData?.itemCards && cardData.itemCards.length > 0) {
          categories.push({
            title: cardData?.title || "Menu Items",
            items: cardData.itemCards.map((item: any) => item?.card?.info),
          });
        }
      });

      setMenuCategories(categories);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  if (restInfo === null || !restInfo) {
    return (
      <div className="flex justify-center items-center flex-col mt-2 sm:mt-4 p-2 sm:p-4">
        {/* Restaurant Name Shimmer */}
        <div className="shimmer h-8 sm:h-10 md:h-12 w-48 sm:w-64 md:w-80 rounded-lg mb-3 sm:mb-4 bg-gray-200"></div>

        {/* Restaurant Image Shimmer */}
        <div className="shimmer w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-xl mb-3 sm:mb-4 bg-gray-200"></div>

        {/* Restaurant Info Card Shimmer */}
        <div className="max-w-xl w-full bg-white rounded-xl border p-3 sm:p-5 shadow-lg mb-4 sm:mb-6 mx-2">
          <div className="shimmer h-5 sm:h-6 w-24 sm:w-32 rounded mb-2 sm:mb-3 bg-gray-200"></div>
          <div className="shimmer h-4 sm:h-5 w-full rounded mb-2 bg-gray-200"></div>
          <div className="shimmer h-4 sm:h-5 w-3/4 rounded mb-2 bg-gray-200"></div>
          <div className="shimmer h-4 sm:h-5 w-2/3 rounded bg-gray-200"></div>
        </div>

        {/* Menu Title Shimmer */}
        <div className="shimmer h-6 sm:h-8 w-24 sm:w-32 rounded-lg mb-3 sm:mb-4 bg-gray-200"></div>

        {/* Menu Items Shimmer */}
        <div className="w-full max-w-4xl px-2 sm:px-4">
          <div className="shimmer h-16 sm:h-20 md:h-24 w-full rounded-xl mb-3 sm:mb-4 bg-gray-200"></div>
          <div className="shimmer h-16 sm:h-20 md:h-24 w-full rounded-xl mb-3 sm:mb-4 bg-gray-200"></div>
          <div className="shimmer h-16 sm:h-20 md:h-24 w-full rounded-xl mb-3 sm:mb-4 bg-gray-200"></div>
          <div className="shimmer h-16 sm:h-20 md:h-24 w-full rounded-xl bg-gray-200"></div>
        </div>
      </div>
    );
  }

  if (restInfo?.error) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Oops!</h1>
        <p>{restInfo.error}</p>
        <p>
          <strong>Restaurant ID:</strong> {resId}
        </p>
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
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    costForTwoMessage,
    avgRating,
    sla,
  } = restInfo;

  return (
    <div className="flex justify-center items-center flex-col mt-4 p-2 sm:p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center px-2">
        {name}
      </h1>
      {cloudinaryImageId && (
        <img
          className="hover:shadow-2xl transition-shadow duration-300 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-xl object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
      )}
      <div className="flex justify-center items-center w-full mt-4 px-2">
        <div className="max-w-xl w-full bg-white rounded-xl sm:rounded-2xl border p-4 sm:p-5 justify-center hover:shadow-2xl transition-shadow duration-300">
          {/* Rating + Cost Row */}
          <div className="flex items-center gap-2 sm:gap-3 mb-3 align-middle flex-wrap">
            <span className="flex items-center text-green-600 font-semibold text-sm sm:text-base">
              ⭐ {avgRating}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-700 font-medium text-sm sm:text-base">
              ₹{costForTwo / 100} for two
            </span>
          </div>

          {/* Cuisines */}
          <p className="text-orange-600 font-semibold underline cursor-pointer mb-2 text-sm sm:text-base break-words">
            {cuisines?.join(", ")}
          </p>

          {/* Outlet + Delivery Time */}
          <div className="flex flex-col gap-2 text-gray-700 text-sm sm:text-base">
            <p>
              <span className="font-semibold">Outlet:</span>{" "}
              {sla?.lastMileTravelString || "—"}
            </p>

            <p>
              <span className="font-semibold">Delivery Time:</span>{" "}
              {sla?.slaString || sla?.deliveryTime}
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-6 text-center">
        Menu
      </h2>
      {menuCategories?.length > 0 ? (
        <RestaurantCategories categories={menuCategories} />
      ) : (
        <p className="text-gray-500">No menu items available</p>
      )}
    </div>
  );
};

export default RestaurantsMenu;
