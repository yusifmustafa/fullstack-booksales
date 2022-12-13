import React, { useState } from "react";
import Api from "../utils/Api";

export const ProductContext = React.createContext({});
const URL_ALL_PRODUCT = "/";

const INITIAL_STATE = {
  products: [],
};

const ProductContextProvider = (props) => {
  const [state, setState] = useState(INITIAL_STATE);
  return (
    <ProductContext.Provider
      value={{
        ...state,
        getAllProduct: getAllProduct,
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
};

export default ProductContextProvider;
