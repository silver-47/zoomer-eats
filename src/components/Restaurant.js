import React from "react";
import "./Restaurant.css";
import star from "../assets/star.svg";
import outlets from "../assets/outlets.svg";

const Restaurant = (props) => {
  return (
    <div className="Restaurant" onClick={props.onClick}>
      <div
        className="image"
        style={{ backgroundImage: `url(${props.imageURL})` }}
      ></div>
      <div className="details">
        <div className="rating">
          <img src={star} alt="" /> {props.rating}
        </div>
        <h1>{props.name}</h1>
        <h2>{props.cuisines}</h2>
        <h3 id="time">{props.time} mins</h3>
        <h3 id="price">${props.cost ? props.cost : 0} for Two</h3>
        {props.outlets > 1 ? (
          <h3 id="outlets" style={{ right: 0 }}>
            {props.outlets} Outlets Near You <img src={outlets} alt="" />
          </h3>
        ) : null}
      </div>
    </div>
  );
};

export default Restaurant;
