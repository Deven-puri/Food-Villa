import React, { useState, useEffect } from "react";
import RestaurantContainer from "./RestraurentsContainers";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body: React.FC = () => {
  const [restaurantList, setListOfRestaurants] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState<any[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const onlineStatus = useOnlineStatus();

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
        console.log(
          "✅ Successfully loaded",
          formattedRestaurants.length,
          "restaurants"
        );
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
    <div className="body">
      <div className="filter-btn-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
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
          className={`filter-btn ${isFiltered ? "active" : ""}`}
          onClick={handleFilterRestaurants}
        >
          {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants (4.0+)"}
        </button>
      </div>
      <div className="restaurant-Container">
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
  );
};

export default Body;
