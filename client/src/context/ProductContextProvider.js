import React, { useState } from "react";
import Api from "../utils/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
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
  isAuth: false,
};

const notifySuccess = () => toast.success("Məhsul səbətə əlavə edildi!");
const notifyError = () => toast.error("Bu məhsul səbəttə mövcuddur!");
const notifyAddFavProd = () =>
  toast.success("Məhsul favoritlər siyahısına əlavə edildi!");
const notifyAddFavProdErr = () =>
  toast.error("Bu məhsul favoritlər siyahısında mövcuddur!");
const successRegister = () => {
  toast.success("Qeydiyyat uğurludur");
};
const errorRegister = () => {
  toast.error("Bu adda istifadəçi mövcuddur");
};
const errorRegisterEmpty = () => {
  toast.error("Məlumatlar tam deyil");
};
const errorLogin = () => {
  toast.error("Xəta! bu maildə istifadəçi mövcud deyil");
};
const successLogin = () => {
  toast.success("Giriş uğurludur");
};
const errorPaswordLogin = () => {
  toast.error("Şifrə yanlışdır");
};

const ProductContextProvider = (props) => {
  const [state, setState] = useState(INITIAL_STATE);

  const navigate = useNavigate();
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
        registerSite: registerSite,
        loginSite: loginSite,
        logOut: logOut,
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

  function registerSite(user) {
    Api.post("http://127.0.0.1:5000/api/register", user).then((rsp) => {
      if (rsp.data.message === "Melumat elave edildi") {
        successRegister();
      } else if (rsp.data.message === "Bu istifadeci movcuddur") {
        errorRegister();
      } else if (rsp.data.message === "Melumatlar tam doldurulmayib") {
        errorRegisterEmpty();
      }
    });
  }

  function loginSite(user) {
    Api.post("http://127.0.0.1:5000/api/login", user).then((rsp) => {
      console.log(rsp);
      if (rsp.data.message === "Bu mailde istifadeci movcud deyil") {
        errorLogin();
        setState({ ...state, isAuth: false });
      } else if (rsp.data.message === "Girish ugurludur") {
        successLogin();
        navigate("/mainPage");
        setState({ ...state, isAuth: true });
      } else if (rsp.data.message === "Parol yalnishdir") {
        errorPaswordLogin();
        setState({ ...state, isAuth: false });
      }
    });
  }

  function logOut() {
    navigate("/");
    setState({ ...state, isAuth: false });
  }
};

export default ProductContextProvider;
