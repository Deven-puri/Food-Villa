import React, { useState, useEffect, useMemo } from "react";
import RestaurantContainer from "./RestraurentsContainers";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body: React.FC = () => {
  const [restaurantList, setListOfRestaurants] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
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
      setListOfRestaurants([]);
    }
  };

  // Live search suggestions
  const searchSuggestions = useMemo(() => {
    if (!searchText.trim()) return [];
    const lowerSearch = searchText.toLowerCase();
    return restaurantList
      .filter((restaurant) =>
        restaurant.ResName.toLowerCase().includes(lowerSearch)
      )
      .slice(0, 5)
      .map((restaurant) => restaurant.ResName);
  }, [searchText, restaurantList]);

  // Filter restaurants based on search and filter
  const filteredRestaurants = useMemo(() => {
    let filtered = restaurantList;

    // Apply search filter
    if (searchText.trim()) {
      filtered = filtered.filter((restaurant) =>
        restaurant.ResName.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Apply top rated filter
    if (isFiltered) {
      filtered = filtered.filter(
        (restaurant) => parseFloat(restaurant.rating) >= 4.0
      );
    }

    return filtered;
  }, [restaurantList, searchText, isFiltered]);

  const handleFilterRestaurants = () => {
    setIsFiltered(!isFiltered);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchText(suggestion);
    setShowSuggestions(false);
  };

  if (onlineStatus === false) {
    return <h1>You are offline! Please check your internet connection.</h1>;
  }

  return (
    <div className="body mt-2 pt-2 px-2 sm:px-4">
      <div className="filter-btn-container flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center max-w-7xl mx-auto">
        <div className="search flex gap-2 flex-1 w-full sm:w-auto relative">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              className="px-3 py-2 border border-gray-300 rounded w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {showSuggestions && searchSuggestions.length > 0 && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {searchSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-3 py-2 hover:bg-yellow-50 cursor-pointer text-sm sm:text-base border-b border-gray-100 last:border-b-0"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <button
          className={`border border-solid border-black filter-btn px-4 sm:px-6 py-2 rounded whitespace-nowrap hover:bg-gray-100 text-sm sm:text-base transition-colors ${
            isFiltered ? "bg-yellow-400 font-semibold" : ""
          }`}
          onClick={handleFilterRestaurants}
        >
          {isFiltered ? "Show All" : "Top Rated (4.0+)"}
        </button>
      </div>
      <div className="restaurant-Container mt-4 sm:mt-8 max-w-7xl mx-auto px-2 sm:px-6">
        {restaurantList.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
            <Shimmer />
          </div>
        ) : filteredRestaurants.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <div className="text-6xl sm:text-7xl mb-4">🔍</div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 mb-2">
              No restaurants found
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              {searchText.trim()
                ? `We couldn't find any restaurants matching "${searchText}"`
                : "No restaurants match your current filters"}
            </p>
            {searchText.trim() && (
              <button
                onClick={() => setSearchText("")}
                className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-lg transition-colors text-sm sm:text-base"
              >
                Clear Search
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantContainer
                key={restaurant.id}
                id={restaurant.id}
                ResName={restaurant.ResName}
                cusine={restaurant.cusine}
                cloudinaryImageId={restaurant.cloudinaryImageId}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
