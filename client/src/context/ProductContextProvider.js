import React, { useState } from "react";
import Api from "../utils/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ProductContext = React.createContext({});
const URL_ALL_PRODUCT = "/";
const URL_PRODUCT_DETAIL = "/:id";
const URL_BASKET_PRODUCTS = "/api/basketproducts";
const INITIAL_STATE = {
  products: [],
  product: {},
  sendToBasketProduct: [],
  user: {},
  wishListProducts: [],
};

const notifySuccess = () => toast.success("Məhsul səbətə əlavə edildi!");
const notifyError = () => toast.error("Bu məhsul səbəttə mövcuddur!");
const notifyAddFavProd = () =>
  toast.success("Məhsul favoritlər siyahısına əlavə edildi!");
const notifyAddFavProdErr = () =>
  toast.error("Bu məhsul favoritlər siyahısında mövcuddur!");
const ProductContextProvider = (props) => {
  const [state, setState] = useState(INITIAL_STATE);
  return (
    <ProductContext.Provider
      value={{
        ...state,
        getAllProduct: getAllProduct,
        getProductById: getProductById,
        getBasketProducts: getBasketProducts,
        sendToBasketProducts: sendToBasketProducts,
        deleteBasketProduct: deleteBasketProduct,
        handleOnChange: handleOnChange,
        addProductToWishList: addProductToWishList,
        getWishListProducts: getWishListProducts,
        deleteWishListProduct: deleteWishListProduct,
        updateProduct: updateProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );

  function getAllProduct() {
    Api.get(URL_ALL_PRODUCT).then((rsp) => {
      const data = rsp?.data;
      setState({ ...state, products: data });
    });
  }
  function getProductById(id) {
    Api.get(URL_PRODUCT_DETAIL.replace("/:id", id)).then((rsp) => {
      const data = rsp?.data;
      data.map((product) => setState({ ...state, product: product }));
    });
  }
  function handleOnChange(event) {
    const { name, value } = event;
    setState(
      Object.assign({}, state, {
        user: Object.assign({}, state.user, { [name]: value }),
      })
    );
  }
  function getBasketProducts() {
    Api.get(URL_BASKET_PRODUCTS).then((rsp) => {
      const data = rsp?.data;
      setState({ ...state, sendToBasketProduct: data });
    });
  }
  function sendToBasketProducts(id) {
    Api.post(`http://127.0.0.1:5000/api/basketproducts/${id}`, id).then(
      (rsp) => {
        console.log("sssss", rsp);
        if (rsp.data.result === false) {
          notifyError();
        } else {
          notifySuccess();
        }
      }
    );
  }
  function getWishListProducts() {
    Api.get("http://127.0.0.1:5000/api/favproducts").then((rsp) => {
      setState({ ...state, wishListProducts: rsp.data });
    });
  }

  function addProductToWishList(id) {
    Api.post(`http://127.0.0.1:5000/api/favproducts/${id}`).then((rsp) => {
      if (rsp.data.result === false) {
        notifyAddFavProdErr();
      } else {
        notifyAddFavProd();
        console.log("salam");
      }
      console.log(rsp);
    });
  }

  function deleteBasketProduct(id) {
    Api.delete(`http://127.0.0.1:5000/api/basketproducts/${id}`).then(() => {
      getBasketProducts();
    });
  }

  function deleteWishListProduct(id) {
    Api.delete(`http://127.0.0.1:5000/api/favproducts/${id}`).then(() => {
      getWishListProducts();
    });
  }

  function updateProduct(id, count) {
    Api.put(`http://127.0.0.1:5000/api/favproducts/${id}`, count).then(
      (rsp) => {
        console.log(rsp);
      }
    );
  }
};

export default ProductContextProvider;
