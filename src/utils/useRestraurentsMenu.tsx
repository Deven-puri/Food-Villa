import { useEffect, useState } from "react";

const useRestrauntsMenu = (restaurantId: string) => {
    const [restInfo, setRestInfo] = useState<any>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId=${restaurantId}`);
                const json = await data.json();
                console.log("Menu API Response:", json);
                
                const cards = json?.data?.cards || [];
                const restaurantCard = cards.find(
                    (c: any) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
                );
                const restaurantInfo = restaurantCard?.card?.card?.info;
                if (restaurantInfo) {
                    setRestInfo(restaurantInfo);
                }
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };
        
        if (restaurantId) {
            fetchData();
        }
    }, [restaurantId]);
    return restInfo;
};

export default useRestrauntsMenu;
