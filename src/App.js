import React from "react";
import "./App.css";
import Loader from "./components/Loader";
import ControlNav from "./components/ControlNav";
import Restaurants from "./containers/Restaurants";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchRestaurants() {
      const resp = await fetch(
        "https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ latitude: 13.0358481, longitude: 80.244455 }),
        }
      );
      const json = await resp.json();
      localStorage.setItem(
        "restaurantList",
        JSON.stringify(json.listRestaurants)
      );
      localStorage.setItem(
        "restaurantCount",
        JSON.stringify(json.restaurantCount)
      );
      setLoading(false);
    }
    fetchRestaurants();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="App">
      <ControlNav />
      <Restaurants />
    </div>
  );
};

export default App;
