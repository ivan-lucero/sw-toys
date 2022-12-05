import React, { useContext } from "react";
import { TYPES } from "../actions/shoppingActions";
import CartCard from "../components/CartCard";
import { CartContext } from "../context/Context";
import { getARSvalue, getEURvalue } from "../services/exchancePrice";

const Summary = () => {
  const [state, dispatch] = useContext(CartContext);

  const { cart, price_format } = state;

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
    totalAmount();
  };

  const totalAmount = () => {
    dispatch({ type: TYPES.TOTAL_AMOUNT });
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
    totalAmount();
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
      <h3>Carrito:</h3>
      <section>
        {cart.map((item, index) => (
          <CartCard
            key={index}
            data={item}
            delFromCart={delFromCart}
            price_format={price_format}
          />
        ))}
        <button onClick={clearCart}>Limpiar carrito</button>
        <button onClick={totalAmount}>MONTO TOTAL</button>
      </section>
      <section>
        <p>TOTAL: {`${parseInt(state.total)} ${price_format}`}</p>
      </section>
    </div>
  );
};

export default Summary;
