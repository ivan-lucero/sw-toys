import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <>
      <main className="container-fluid home d-flex align-items-center">
        <div className="ms-5">
          <h2 className="hero-1 mb-5">MAY THE TOYS BE WITH YOU</h2>
          <h1 className="subtitle mb-4">
            Juguetes de Star Wars <br /> de máxima calidad
          </h1>
          <Link to="/products">
            <button className="button">Ver productos</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
