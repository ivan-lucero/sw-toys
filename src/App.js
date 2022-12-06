import axios from "axios";
import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TYPES } from "./actions/shoppingActions";
import { CartContext } from "./context/Context";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Summary from "./pages/Summary";
import { getPeopleByID } from "./services/people";
import { getStarshipByID } from "./services/starship";
import "./index.css";

function App() {
  const [state, dispatch] = useContext(CartContext);

  useEffect(() => {
    getPeopleByID(1).then((res) => {
      let films = [];
      res.films.forEach((film_url) => {
        axios.get(film_url).then((resfilm) => films.push(resfilm.data.title));
      });
      let price = 100;
      res = {
        id: 1,
        ...res,
        price: price,
        price_formatted: price,
        category: "personajes",
        films_title: films,
      };
      dispatch({ type: TYPES.INIT_PRODUCTS, payload: res });
    });
    getPeopleByID(2).then((res) => {
      let films = [];
      res.films.forEach((film_url) => {
        axios.get(film_url).then((resfilm) => films.push(resfilm.data.title));
      });
      let price = 200;
      res = {
        ...res,
        id: 2,
        price: price,
        price_formatted: price,
        category: "personajes",
        films_title: films,
      };
      dispatch({ type: TYPES.INIT_PRODUCTS, payload: res });
    });
    getPeopleByID(3).then((res) => {
      let films = [];
      res.films.forEach((film_url) => {
        axios.get(film_url).then((resfilm) => films.push(resfilm.data.title));
      });
      let price = 150;
      res = {
        ...res,
        id: 3,
        price: price,
        price_formatted: price,
        category: "personajes",
        films_title: films,
      };
      dispatch({ type: TYPES.INIT_PRODUCTS, payload: res });
    });
    getStarshipByID(2).then((res) => {
      let films = [];
      res.films.forEach((film_url) => {
        axios.get(film_url).then((resfilm) => films.push(resfilm.data.title));
      });
      let price = 250;
      res = {
        ...res,
        id: 4,
        price: price,
        price_formatted: price,
        category: "naves",
        films_title: films,
      };
      dispatch({ type: TYPES.INIT_PRODUCTS, payload: res });
    });
    getStarshipByID(3).then((res) => {
      let films = [];
      res.films.forEach((film_url) => {
        axios.get(film_url).then((resfilm) => films.push(resfilm.data.title));
      });
      let price = 150;
      res = {
        ...res,
        id: 5,
        price: price,
        price_formatted: price,
        category: "naves",
        films_title: films,
      };
      dispatch({ type: TYPES.INIT_PRODUCTS, payload: res });
    });
    getStarshipByID(9).then((res) => {
      let films = [];
      res.films.forEach((film_url) => {
        axios.get(film_url).then((resfilm) => films.push(resfilm.data.title));
      });
      let price = 100;
      res = {
        ...res,
        id: 6,
        price: price,
        price_formatted: price,
        category: "naves",
        films_title: films,
      };
      dispatch({ type: TYPES.INIT_PRODUCTS, payload: res });
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/sw-toys" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
