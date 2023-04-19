import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../components/Product Detail/ProductDetail";
import BasketProducts from "../components/Basket Products/BasketProducts";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import WishList from "../components/Wish List/WishList";
import ProtectedRoutes from "./ProtectedRoutes";
import productList from "../components/Porductlist/ProductList";
import Spinner from "../components/Spinner";
import { ProductContext } from "../context/ProductContextProvider";

const Routing = () => {
  const context = useContext(ProductContext);
  const { loading } = context;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route
              path="/"
              element={<ProtectedRoutes Component={productList} />}
            />
            <Route
              path="productdetail/:id"
              element={<ProtectedRoutes Component={ProductDetail} />}
            />
            <Route
              path="/basketproducts"
              element={<ProtectedRoutes Component={BasketProducts} />}
            />
            <Route
              path="/basketproducts/:id"
              element={<ProtectedRoutes Component={BasketProducts} />}
            />
            <Route
              path="/wishlist"
              element={<ProtectedRoutes Component={WishList} />}
            />
          </Routes>
        </>
      )}
    </>
  );
};

export default Routing;
