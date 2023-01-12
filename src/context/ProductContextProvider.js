import React, { useState } from "react";
import Api from "../utils/Api";

export const ProductContext = React.createContext({});
const URL_ALL_PRODUCT = "/";
const URL_PRODUCT_DETAIL = "/:id";
const URL_BASKET_PRODUCTS = "/api/basketproducts";
const INITIAL_STATE = {
  products: [],
  product: {},
  sendToBasketProduct: [],
  user: {},
  basketProducts: {},
};
console.log("totalPrice: ", INITIAL_STATE.totalPrice);
console.log("counttt: ", INITIAL_STATE.count);
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
        getBasketProductsById: getBasketProductsById,
        incrementValue: incrementValue,
        decrementValue: decrementValue,
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
    Api.post(`http://127.0.0.1:5000/api/basketproducts/${id}`, id).then(() => {
      getAllProduct();
    });
  }

  function deleteBasketProduct(id) {
    Api.delete(`http://127.0.0.1:5000/api/basketproducts/${id}`).then(() => {
      getAllProduct();
    });
  }

  function getBasketProductsById(id) {
    Api.get(`http://127.0.0.1:5000/api/basketproducts/${id}`).then((rsp) => {
      const data = rsp?.data;
      data.map((item) => setState({ ...state, basketProducts: item }));
    });
  }

  function incrementValue(id) {
    const data = state.sendToBasketProduct;
    (data ? data : []).forEach((item) => {
      let total = item.price * item.count;
      if (id === item.id) {
        item.count += 1;
        setState({ ...state, count: item.count, totalPrice: total });
      }
    });
  }

  function decrementValue(id) {
    const data = state.sendToBasketProduct;
    (data ? data : []).forEach((item) => {
      if (id === item.id) {
        item.count -= 1;
        setState({ ...state, count: item.count });
      }
    });
  }
};

export default ProductContextProvider;
