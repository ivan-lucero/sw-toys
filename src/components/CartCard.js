import React from "react";
import "./cartcard.css";
import { Trash3Fill as Trash } from "react-bootstrap-icons";

const CartCard = ({ data, delFromCart, addToCart, price_format, img }) => {
  return (
    <div className="cart-card mt-3 p-3">
      <div className="d-flex align-items-center justify-content-center">
        <img src={img} />
      </div>
      <p className="card-title">{data.name}</p>
      <div className="d-flex align-items-center">
        <button className="button" onClick={() => delFromCart(data.id)}>
          -
        </button>
        <div className="button">{data.quantity}</div>
        <button className="button" onClick={() => addToCart(data.id)}>
          +
        </button>
        <p className="card-price mb-0 ms-3">{`$${parseInt(
          data.price_formatted * data.quantity
        )} ${price_format}`}</p>
      </div>
      <button
        className="trash-button"
        onClick={() => delFromCart(data.id, true)}
      >
        <Trash className="trash-button__icon" />
      </button>
    </div>
  );
};

export default CartCard;
