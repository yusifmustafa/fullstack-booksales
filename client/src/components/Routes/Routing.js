import React from "react";
import ProductContextProvider from "../../context/ProductContextProvider";
import Navbar from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductList from "../Porductlist/ProductList";
import ProductDetail from "../Product Detail/ProductDetail";
import BasketProducts from "../Basket Products/BasketProducts";
 import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import WishList from "../Wish List/WishList";

const Routing = () => {
  return (
    <>
      <ProductContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
          <Route path="/basketproducts" element={<BasketProducts />} />
          <Route path="/basketproducts/:id" element={<BasketProducts />} />
           <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </ProductContextProvider>
    </>
  );
};

export default Routing;
