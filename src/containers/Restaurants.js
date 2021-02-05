import React from "react";
import { useState, useEffect, useContext } from "react";
import { RestaurantContext } from "../context/restaurantContext";
import Restaurant from "../components/Restaurant";
import Loader from "../components/Loader";
import back from "../assets/outlets.svg";

const Restaurants = () => {
  const restaurantsList = useContext(RestaurantContext).restaurantList;

  const [loading, setLoading] = useState(false);

  const [view, setView] = useState({
    show: true,
    restaurants: restaurantsList,
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [view, setView, setLoading]);

  const showOutletsOF = (id) => {
    const selected = restaurantsList.filter(
      ({ restaurantId }) => id === restaurantId
    )[0].outlet;
    setView({
      show: false,
      restaurants: selected,
    });
  };

  const backToList = () => {
    setView({
      show: true,
      restaurants: restaurantsList,
    });
  };

  return loading ? (
    <Loader />
  ) : (
    <React.Fragment>
      {view.restaurants.map((restaurant) => (
        <Restaurant
          key={view.show ? restaurant.restaurantId : restaurant.outletId}
          name={view.show ? restaurant.restaurantName : restaurant.outletName}
          cuisines={
            restaurant.cuisines === ""
              ? "North Indian, Chinese, Continental"
              : restaurant.cuisines
          }
          rating={
            restaurant.averageReview === "0.0"
              ? (Math.random() * 4 + 1).toFixed(1)
              : restaurant.averageReview
          }
          time={restaurant.time}
          cost={restaurant.costForTwo}
          outlets={view.show ? restaurant.outlet.length : 0}
          imageURL={view.show ? restaurant.restaurantImage : restaurant.image}
          onClick={() => {
            if (view.show) {
              showOutletsOF(restaurant.restaurantId);
            }
          }}
        />
      ))}
      {view.show ? null : (
        <img
          style={{
            backgroundColor: "#e7e7e7",
            padding: "15px 30px",
            display: "inline-block",
            transform: "scaleX(-1)",
          }}
          src={back}
          alt=""
          onClick={() => backToList()}
        />
      )}
    </React.Fragment>
  );
};

export default Restaurants;
