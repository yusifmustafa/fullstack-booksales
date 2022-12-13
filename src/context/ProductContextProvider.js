import React, { useState } from "react";

const INITIAL_STATE = {

};

const URL_ALL_PRODUCT = "/";

export const ProductContext = React.createContext({});
const ProductContextProvider = () => {
  const [state, setState] = useState(INITIAL_STATE);
  return (
    <ProductContext.Provider
      value={{
        ...state,
      }}
    ></ProductContext.Provider>
  );


function getAllProduct () {
    
}

};

export default ProductContextProvider;
