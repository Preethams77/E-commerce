import React from "react"; //3rd
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const store = useSelector((state) => state);

  return (
    <div>
      <div className="home-app-name">
        E-Commerce Website
        <button className="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button className="button"
          onClick={() => {
            navigate("/productlist");
          }}
        >
          Products
        </button>
        <button className="button"
          onClick={() => { //length of the cart array.
            navigate("/cart");
          }}
        >
          Cart ({store.cart.length})
        </button>
      </div>
    </div>
  );
};

export default Home;