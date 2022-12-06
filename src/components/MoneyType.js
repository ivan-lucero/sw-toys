import React, { useContext } from "react";
import { TYPES } from "../actions/shoppingActions";
import { CartContext } from "../context/Context";
import { getARSvalue, getEURvalue } from "../services/exchancePrice";
import "./moneytype.css";

const MoneyType = () => {
  const [state, dispatch] = useContext(CartContext);

  const changePriceToARS = (e) => {
    getARSvalue().then((res) => {
      let ars_value = res;
      dispatch({ type: TYPES.CHANGE_PRICE_TO_ARS, payload: ars_value });
      totalAmount();
      changeColourBtn(e);
    });
  };
  const changePriceToEUR = (e) => {
    getEURvalue().then((res) => {
      let eur_value = res;
      dispatch({ type: TYPES.CHANGE_PRICE_TO_EUR, payload: eur_value });
      totalAmount();
      changeColourBtn(e);
    });
  };
  const changePriceToUSD = (e) => {
    dispatch({ type: TYPES.CHANGE_PRICE_TO_USD });
    totalAmount();
    changeColourBtn(e);
  };

  const totalAmount = () => {
    dispatch({ type: TYPES.TOTAL_AMOUNT });
  };

  const changeColourBtn = (e) => {
    let buttons = document.querySelectorAll(".button-money");
    buttons.forEach((btn) => {
      btn.classList.remove("selected");
    });
    e.target.classList.toggle("selected");
  };
  return (
    <article>
      <h6 className="text">Mostrar precios en:</h6>
      <button className="button-money" onClick={changePriceToARS}>
        ARS
      </button>
      <button className="button-money selected" onClick={changePriceToUSD}>
        USD
      </button>
      <button className="button-money" onClick={changePriceToEUR}>
        EUR
      </button>
    </article>
  );
};

export default MoneyType;
