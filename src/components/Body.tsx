import React, { useState, useEffect, useContext } from "react";
import RestaurantContainer from "./RestraurentsContainers";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body: React.FC = () => {
  const [restaurantList, setListOfRestaurants] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState<any[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const url =
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";
      console.log("Fetching from:", url);

      const data = await fetch(url);
      console.log("Response received, status:", data.status);

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const json = await data.json();
      console.log("JSON parsed successfully", json);

      const cards = json?.data?.cards || [];
      console.log("Cards found:", cards.length);

      const restaurantCard = cards.find(
        (c: any) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      const apiRestaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];
      const categories =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
          (c: any) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
        );
      console.log("categories", categories);
      console.log("Restaurants extracted:", apiRestaurants.length);

      if (apiRestaurants.length > 0) {
        const formattedRestaurants = apiRestaurants.map((restaurant: any) => ({
          id: restaurant.info.id,
          ResName: restaurant.info.name,
          cusine: restaurant.info.cuisines?.join(", ") || "",
          cloudinaryImageId: restaurant.info.cloudinaryImageId,
          rating: restaurant.info.avgRating?.toString() || "0",
          deliveryTime: restaurant.info.sla?.slaString || "N/A",
        }));
        setListOfRestaurants(formattedRestaurants);
        setFilteredRestaurants(formattedRestaurants);
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      if (error instanceof Error) {
        console.error("Error details:", {
          name: error.name,
          message: error.message,
          stack: error.stack,
        });
      }
      // Keep empty arrays so shimmer shows
      setListOfRestaurants([]);
      setFilteredRestaurants([]);
    }
  };
  const handleFilterRestaurants = () => {
    if (isFiltered) {
      setFilteredRestaurants(restaurantList);
      setIsFiltered(false);
    } else {
      const topRatedRestaurants = restaurantList.filter(
        (restaurant) => parseFloat(restaurant.rating) >= 4.0
      );
      setFilteredRestaurants(topRatedRestaurants);
      setIsFiltered(true);
    }
  };

  if (onlineStatus === false) {
    return <h1>You are offline! Please check your internet connection.</h1>;
  }

  return (
    <div className="body mt-2 pt-2">
      <div className="filter-btn-container flex gap-4 items-center">
        <div className="search flex gap-2 flex-1">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded flex-1"
          />
          <button
            className="px-6 py-2 border border-gray-400 rounded hover:bg-gray-100 "
            onClick={() => {
              const searchedRestaurantList = restaurantList.filter(
                (restaurant) =>
                  restaurant.ResName.toLowerCase().includes(
                    searchText.toLowerCase()
                  )
              );
              setFilteredRestaurants(searchedRestaurantList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className={`border border-solid border-black filter-btn px-6 py-2 rounded whitespace-nowrap hover:bg-gray-100 ${
            isFiltered ? "active" : ""
          }`}
          onClick={handleFilterRestaurants}
        >
          {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants (4.0+)"}
        </button>
        <input
          type="text"
          placeholder="Enter User name..."
          className="px-4 py-2 border border-gray-300 rounded mr-2"
          onChange={(e) => setLoggedInUser(e.target.value)}
        />
      </div>
      <div className="restaurant-Container mt-8 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {filteredRestaurants.length === 0 ? (
            <Shimmer />
          ) : (
            filteredRestaurants.map((restaurant) => (
              <RestaurantContainer
                key={restaurant.id}
                id={restaurant.id}
                ResName={restaurant.ResName}
                cusine={restaurant.cusine}
                cloudinaryImageId={restaurant.cloudinaryImageId}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
