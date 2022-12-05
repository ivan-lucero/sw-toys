import React, { useContext } from "react";
import { TYPES } from "../actions/shoppingActions";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/Context";
import { getARSvalue, getEURvalue } from "../services/exchancePrice";

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

  const changePriceToARS = () => {
    getARSvalue().then((res) => {
      let ars_value = res;
      dispatch({ type: TYPES.CHANGE_PRICE_TO_ARS, payload: ars_value });
      totalAmount();
    });
  };
  const changePriceToEUR = () => {
    getEURvalue().then((res) => {
      let eur_value = res;
      dispatch({ type: TYPES.CHANGE_PRICE_TO_EUR, payload: eur_value });
      totalAmount();
    });
  };
  const changePriceToUSD = () => {
    dispatch({ type: TYPES.CHANGE_PRICE_TO_USD });
    totalAmount();
  };

  return (
    <div>
      <section>
        <button onClick={changePriceToARS}>ARS</button>
        <button onClick={changePriceToUSD}>USD</button>
        <button onClick={changePriceToEUR}>EUR</button>
      </section>
      <h2>Productos</h2>
      <section>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            data={product}
            addToCart={addToCart}
            price_format={price_format}
          />
        ))}
      </section>
    </div>
  );
};

export default Products;
