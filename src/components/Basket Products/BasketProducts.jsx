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
const BasketProducts = (props) => {
   const context = useContext(ProductContext);
  const { sendToBasketProduct } = context;
  console.log("sendToBasketProduct: ", sendToBasketProduct);
  let total = 0;
  let tax = 0;
  let shipping = 0;

  useEffect(() => {
    context.getBasketProducts();
  }, []);

  return (
    <div className="wrap cf">
      <h1 className="projTitle">Basket</h1>
      <div className="heading cf">
        <h1>My Cart</h1>
        <Link to="/" className="continue">
          Continue Shopping
        </Link>
      </div>
      <div className="cart">
        <ul className="cartWrap">
          {sendToBasketProduct.length ? (
            sendToBasketProduct.map((item) => {
              total = total + shipping + tax + item.price * item.count;
              shipping = parseInt(total / 6);
              tax = parseInt(total / 10);
              console.log("itemmm: ", item);
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
            // <Stack>
            //   <Skeleton height="20px" />
            //   <Skeleton height="20px" />
            //   <Skeleton height="20px" />
            // </Stack>
          )}
        </ul>

        <div className="promoCode">
          <label htmlFor="promo">Have A Promo Code?</label>
          <input type="text" name="promo" placholder="Enter Code" />
          <a href="#" className="btn"></a>
        </div>

        <div className="subtotal cf">
          <ul>
            <li className="totalRow">
              <span className="label">Shipping</span>
              <span className="value">${shipping}</span>
            </li>

            <li className="totalRow">
              <span className="label">Tax</span>
              <span className="value">${tax}</span>
            </li>

            <li className="totalRow final">
              <span className="label">Total</span>
              <span className="value">${total} </span>
            </li>

            <li className="totalRow">
              <Button
                disabled={sendToBasketProduct.length === 0}
                href="#"
                className="btn continue"
                colorScheme="blue"
                borderRadius="50px"
                width="220px"
                height="70px"
              >
                Checkout
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasketProducts;
