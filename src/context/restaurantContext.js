import React, { useState } from "react";

export const RestaurantContext = React.createContext({});

const Restaurants = ({ children }) => {
  const restaurantDetails = useState({
    restaurantList: JSON.parse(localStorage.getItem("restaurantList")),
    restaurantCount: JSON.parse(localStorage.getItem("restaurantCount")),
  })[0];

  return (
    <RestaurantContext.Provider value={restaurantDetails}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default Restaurants;
