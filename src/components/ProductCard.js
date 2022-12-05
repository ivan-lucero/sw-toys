import React from "react";

const ProductCard = ({ data, addToCart, price_format }) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{`$${parseInt(data.price_formatted)} ${price_format}`}</p>
      <button onClick={() => addToCart(data.id, data.category)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
