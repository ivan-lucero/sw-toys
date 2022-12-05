import React from "react";

const CartCard = ({ data, delFromCart, price_format }) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{`$${parseInt(
        data.price_formatted * data.quantity
      )} ${price_format}`}</p>
      <p>{data.quantity}</p>
      <button onClick={() => delFromCart(data.id)}>Eliminar</button>
      <button onClick={() => delFromCart(data.id, true)}>Eliminar todos</button>
    </div>
  );
};

export default CartCard;
