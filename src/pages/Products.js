import React, { useContext } from "react";
import { TYPES } from "../actions/shoppingActions";
import MoneyType from "../components/MoneyType";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/Context";
import "./products.css";

const Products = () => {
  const [state, dispatch] = useContext(CartContext);
  const { products, price_format } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    totalAmount();
  };

  const totalAmount = () => {
    dispatch({ type: TYPES.TOTAL_AMOUNT });
  };

  return (
    <section className="products py-5">
      <h2 className="hero-2 text-uppercase text-center py-5">Productos</h2>
      <div className="container">
        <MoneyType />
        <article>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              addToCart={addToCart}
              price_format={price_format}
              img={"sw-toys/assets/products/" + product.id + ".png"}
            />
          ))}
        </article>
      </div>
    </section>
  );
};

export default Products;
