import "./ControlNav.css";
import React from "react";
import relevance from "../assets/relevance.svg";
import filter from "../assets/filter.svg";
import { useContext } from "react";
import { RestaurantContext } from "../context/restaurantContext";

const ControlNav = () => {
  const total = useContext(RestaurantContext).restaurantCount;
  return (
    <div className="Toolbar">
      <span>{total} Restaurants</span>
      <span>
        Relevance <img src={relevance} alt="" />
      </span>
      <span>
        Filter <img src={filter} alt="" />
      </span>
    </div>
  );
};

export default ControlNav;
