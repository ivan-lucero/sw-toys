import React from "react";
import "./productcard.css";

const ProductCard = ({ data, addToCart, price_format, img }) => {
  console.log(data);
  return (
    <div className="product-card mt-3 p-3">
      <div className="d-flex align-items-center justify-content-center">
        <img src={img} />
      </div>
      <div>
        <p className="card-title">{data.name}</p>
        <p className="text">{data.category}</p>
        <p className="text mb-0">Peliculas:</p>
        <ul>
          {data.films_title.map((film) => (
            <li className="text-2">{film}</li>
          ))}
        </ul>
        <button
          className="button"
          onClick={() => addToCart(data.id, data.category)}
        >
          Agregar al carrito
        </button>
      </div>
      <div>
        <p className="card-price">{`$${parseInt(
          data.price_formatted
        )} ${price_format}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
