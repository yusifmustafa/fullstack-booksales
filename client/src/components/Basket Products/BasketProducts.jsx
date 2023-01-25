import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
import BasketProductItem from "./BasketProductItem";
import "./BasketProducts.css";
import { useState } from "react";
const BasketProducts = () => {
  const context = useContext(ProductContext);
  let { sendToBasketProduct } = context;
  useEffect(() => {
    context.getBasketProducts();
  }, []);
  const [priceProduct, setPriceProduct] = useState(0);

  let total = 0;
  const pull_data = (data) => {
    total += data;
    setPriceProduct(total);
  };
  const navigate = useNavigate();
  const navigateToPaypalPage = () => {
    navigate("/paypalpage");
  };

  let shipping = parseInt(priceProduct / 8);
  let tax = parseInt(priceProduct / 12);

  let subTotal = priceProduct + shipping + tax;

  return (
    <div className="wrap cf">
      <h1 className="projTitle">Səbətİnİz</h1>
      <div className="heading cf">
        <h1>Məhsullar</h1>
        <Link to="/" className="continue">
          Əsas səhifə
        </Link>
      </div>
      <div className="cart">
        <ul className="cartWrap">
          {sendToBasketProduct.length ? (
            sendToBasketProduct.map((item) => {
              return (
                <div key={item.id}>
                  <BasketProductItem item={item} func={pull_data} />
                </div>
              );
            })
          ) : (
            <Alert
              status="error"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="150px"
              borderRadius="20px"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Səbətiniz Boşdur!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                Əsas Səhifəyə qayıdaraq alış-veriş etməyə davam edin
              </AlertDescription>
            </Alert>
          )}
        </ul>

        <div className="promoCode">
          <label htmlFor="promo">Promo kodunuz var?</label>
          <input type="text" name="promo" placholder="Enter Code" />
          <a style={{ height: 42 }} href="#/" className="btn"></a>
        </div>

        <div className="subtotal cf">
          <ul>
            <li className="totalRow">
              <span className="label">Çatdırılma</span>
              <span className="value">₼{shipping}</span>
            </li>

            <li className="totalRow">
              <span className="label">Vergİ dəyərİ</span>
              <span className="value">₼{tax}</span>
            </li>

            <li className="totalRow final">
              <span className="label">Ümumİ Qİymət</span>
              <span className="value">₼{subTotal} </span>
            </li>

            <li className="totalRow">
              <div>
                <button
                  onClick={() => {
                    navigateToPaypalPage();
                  }}
                  class="two"
                >
                  Kartla ödəməyə <b>keç</b>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasketProducts;
