import React from "react"; // 1st part

import { Routes, Route } from "react-router-dom";

import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/ProductDetail/ProductDetail";

const CustomRoutes = () => { //element is product we needed to render.ID is the dynamic value thats going to change.
  return (
    <Routes> 
      <Route path="/productlist" element={<ProductList />} />  
      <Route path="/product">
        <Route path=":productId" element={<ProductDetail />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default CustomRoutes;
