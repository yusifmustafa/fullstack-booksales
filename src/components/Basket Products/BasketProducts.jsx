import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
import BasketProductItem from "./BasketProductItem";
import "./BasketProducts.css";
const BasketProducts = () => {
  const context = useContext(ProductContext);
  let { sendToBasketProduct, subTotal } = context;

  useEffect(() => {
    context.getBasketProducts();
  }, []);

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
                  <BasketProductItem item={item} />
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
          <a href="#" className="btn"></a>
        </div>

        <div className="subtotal cf">
          <ul>
            <li className="totalRow">
              <span className="label">Çatdırılma</span>
              {/* <span className="value">${shipping}</span> */}
            </li>

            <li className="totalRow">
              <span className="label">Vergİ dəyərİ</span>
              {/* <span className="value">${tax}</span> */}
            </li>

            <li className="totalRow final">
              <span className="label">Ümumİ Qİymət</span>
              <span className="value">${subTotal} </span>
            </li>

            <li className="totalRow">
              <Button
                disabled={sendToBasketProduct.length === 0}
                href="#"
                className="btn continue"
                colorScheme="blue"
                borderRadius="50px"
                width="220px"
                height="60px"
                fontSize="1.3em"
              >
                İRƏLİ
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasketProducts;
