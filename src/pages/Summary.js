import React, { useContext } from "react";
import { TYPES } from "../actions/shoppingActions";
import CartCard from "../components/CartCard";
import { CartContext } from "../context/Context";
import { getARSvalue, getEURvalue } from "../services/exchancePrice";
import "./summary.css";
import MoneyType from "../components/MoneyType";
import { Link } from "react-router-dom";

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
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    totalAmount();
  };

  return (
    <section className="summary py-5">
      {cart.length === 0 ? (
        <div className="container">
          <h1 className="hero-2 text-uppercase py-5">Resumen de compra:</h1>
          <p className="card-title">Aun no hay productos en el carrito</p>
          <Link to="/products">
            <button className="button mt-3">Ver productos</button>
          </Link>
        </div>
      ) : (
        <div className="container">
          <h3 className="hero-2 text-uppercase py-5">Resumen de compra:</h3>
          <MoneyType />
          {cart.map((item, index) => (
            <CartCard
              key={index}
              data={item}
              delFromCart={delFromCart}
              addToCart={addToCart}
              price_format={price_format}
              img={"sw-toys/assets/products/" + item.id + ".png"}
            />
          ))}
          <button className="button" onClick={clearCart}>
            Limpiar carrito
          </button>

          <section className="card-summary p-4">
            <h2 className="hero-2">Metodo de pago</h2>
            <p className="hero-2">
              TOTAL: {`${parseInt(state.total)} ${price_format}`}
            </p>
          </section>
        </div>
      )}
    </section>
  );
};

export default Summary;
