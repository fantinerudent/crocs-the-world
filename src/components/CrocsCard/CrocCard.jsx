import { useContext, useState } from "react";
import { CartContext } from "../../App";
import "./style.scss";

const CrocCard = ({ croc }) => {
  const { cart, setNewCart } = useContext(CartContext);
  const handleAddToCart = (croc) => {
    console.log({cart});
    setNewCart(croc);
  };

  return (
    <div className="card">
      <h2 className="card-title"> {croc.name}</h2>
      <p className="card-price">
        Cost : {croc.price} {croc.price > 100 ? "$$$$$$$$$$$$$$" : "$"}
      </p>
      <p className="card-description">Description : {croc.description}</p>
      <div className="img-card-container">
        <img src={croc.imgUrl} alt="" className="img-card" />
      </div>
      <button onClick={() => handleAddToCart(croc)}>🛒</button>
    </div>
  );
};

export default CrocCard;
