import React from 'react';
import { Link } from 'react-router-dom';
import { CDN_URL } from '../utils/constants';

interface RestaurantProps {
    id: string | number;
    ResName: string;
    cusine: string;
    cloudinaryImageId: string;
    rating: string;
    deliveryTime: string;
}

const styleCard = {
    backgroundColor: "lightgrey",
};


const RestaurantContainer: React.FC<RestaurantProps> = ({ id, ResName, cusine, cloudinaryImageId, rating, deliveryTime }) => {
    return (
        <Link to={`/restaurants/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="res-card" style={styleCard}>
            <img 
                className="res-logo" 
                alt={ResName} 
                src={CDN_URL + cloudinaryImageId}
                loading="lazy"
            />
            <h3>{ResName}</h3>
            <h4>{cusine}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
            </div>
        </Link>
    );
};

export default RestaurantContainer;