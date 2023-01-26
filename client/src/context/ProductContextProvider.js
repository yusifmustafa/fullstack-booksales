import React, { useState } from "react";
import Api from "../utils/Api";
import { Alert, AlertIcon, Stack, useToast } from "@chakra-ui/react";

export const ProductContext = React.createContext({});
const URL_ALL_PRODUCT = "/";
const URL_PRODUCT_DETAIL = "/:id";
const URL_BASKET_PRODUCTS = "/api/basketproducts";
const INITIAL_STATE = {
  products: [],
  product: {},
  sendToBasketProduct: [],
  user: {},
  statusCode: true,
};

const ProductContextProvider = (props) => {
  const toast = useToast();
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
      console.log("data:", data);
    });
  }
  function sendToBasketProducts(id) {
    Api.post(`http://127.0.0.1:5000/api/basketproducts/${id}`, id).then(
      (rsp) => {
        console.log("sssss", rsp);
        if (rsp.data.result === false) {
          toast({
            title: "Bu məhsul səbəttə mövcuddur!",
            description: "Məhsulu görüntüləmək üçün səbətə daxil olun",
            position: "top-right",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Məhsul səbətə əlavə edildi!",
            description: "Məhsulu görüntüləmək üçün səbətə daxil olun",
            position: "top-right",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        }
      }
    );
  }

  function deleteBasketProduct(id) {
    Api.delete(`http://127.0.0.1:5000/api/basketproducts/${id}`).then(() => {
      getAllProduct();
    });
  }
};

export default ProductContextProvider;
