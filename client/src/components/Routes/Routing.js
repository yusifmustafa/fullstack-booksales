import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import Navbar from "../Navbar/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductList from "../Porductlist/ProductList";
import ProductDetail from "../Product Detail/ProductDetail";
import BasketProducts from "../Basket Products/BasketProducts";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import WishList from "../Wish List/WishList";

const Routing = () => {
  const context = useContext(ProductContext);
  const navigate = useNavigate();
  const { isAuth } = context;
  console.log(isAuth);

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        {isAuth && (
          <>
            <Route path="/mainPage" element={<ProductList />} />
            <Route path="productdetail/:id" element={<ProductDetail />} />
            <Route path="/basketproducts" element={<BasketProducts />} />
            <Route path="/basketproducts/:id" element={<BasketProducts />} />
            <Route path="/wishlist" element={<WishList />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default Routing;
