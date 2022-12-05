import React, { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartCard from "./CartCard";
import ProductCard from "./ProductCard";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    totalAmount();
  };
  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
    totalAmount();
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
    totalAmount();
  };

  const totalAmount = () => {
    dispatch({ type: TYPES.TOTAL_AMOUNT });
  };

  return (
    <div>
      <h1>Carrito de compras</h1>
      <p>CANT PEDIDOS: {cart.length}</p>
      <h2>Productos</h2>
      <section>
        {products.map((product) => (
          <ProductCard key={product.id} data={product} addToCart={addToCart} />
        ))}
      </section>
      <h3>Carrito:</h3>
      <section>
        {cart.map((item, index) => (
          <CartCard key={index} data={item} delFromCart={delFromCart} />
        ))}
        <button onClick={clearCart}>Limpiar carrito</button>
        <button onClick={totalAmount}>MONTO TOTAL</button>
      </section>
      <section>
        <p>TOTAL: {state.total}</p>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ShoppingCart;
