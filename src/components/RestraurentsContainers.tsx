import React from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

interface RestaurantProps {
  id: string | number;
  ResName: string;
  cusine: string;
  cloudinaryImageId: string;
  rating: string;
  deliveryTime: string;
}

const RestaurantContainer: React.FC<RestaurantProps> = ({
  id,
  ResName,
  cusine,
  cloudinaryImageId,
  rating,
  deliveryTime,
}) => {
  return (
    <Link to={`/restaurants/${id}`} className="block h-full w-full max-w-xs">
      <div className="res-card bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <img
          className="res-logo w-full h-40 sm:h-48 object-cover"
          alt={ResName}
          src={CDN_URL + cloudinaryImageId}
          loading="lazy"
        />
        <div className="p-3 sm:p-4 flex-1 flex flex-col">
          <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-1">
            {ResName}
          </h3>
          <h4 className="text-gray-600 text-xs sm:text-sm mb-1 line-clamp-2 flex-1">
            {cusine}
          </h4>
          <h4 className="text-sm sm:text-base">⭐ {rating}</h4>
          <h4 className="text-gray-500 text-xs sm:text-sm mt-1">{deliveryTime}</h4>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantContainer;
