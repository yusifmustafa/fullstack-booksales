import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductList from "../components/Porductlist/ProductList";
import ProductDetail from "../components/Product Detail/ProductDetail";
import BasketProducts from "../components/Basket Products/BasketProducts";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import WishList from "../components/Wish List/WishList";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
            <Route path="/mainPage" element={<ProductList />} />
            <Route path="productdetail/:id" element={<ProductDetail />} />
            <Route path="/basketproducts" element={<BasketProducts />} />
            <Route path="/basketproducts/:id" element={<BasketProducts />} />
            <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </>
  );
};

export default Routing;
