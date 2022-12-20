import { GridItem, Input, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
import "./Paypal.css";
export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-", ",", "."].includes(e.key) && e.preventDefault();
const Paypal = () => {
  const { id } = useParams();
  console.log("id", id);
  const toast = useToast();

  const context = useContext(ProductContext);
  const { product, user, handleOnChange } = context;
  console.log(product);
  useEffect(() => {
    context.getProductById(id);
  }, [id]);

  let shipping = product.price / 4;
  let tax = product.price / 10;
  return (
    <main class="container">
      <div class="main">
        <section class="payment_method">
          <h2 class="ship_head">Payment Method</h2>
          <div class="card_info">
            <div class="card_head">
              <h2 class="card_title">Debit or Credit Card</h2>
            </div>
            <div class="card_types">
              <img
                class="card_img"
                src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                alt=""
              />
              <img
                class="card_img"
                src="https://cdn-icons-png.flaticon.com/512/349/349230.png"
                alt=""
              />
              <img
                class="card_img"
                src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
                alt=""
              />
              <img
                class="card_img"
                src="https://img.icons8.com/fluency/512/mastercard.png"
                alt=""
              />
            </div>
            <form>
              <Input
                type="text"
                name="cardholder"
                value={user.cardholder}
                onChange={(event) =>
                  handleOnChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
                placeholder="Card Holder"
              />
              <Input
                type="number"
                name="cardnumber"
                value={user.cardnumber}
                onChange={(event) =>
                  handleOnChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
                placeholder="Card Number"
              />
              <div>
                <Input
                  type="month"
                  name="date"
                  value={user.date}
                  min="2020-08"
                  onChange={(event) =>
                    handleOnChange({
                      name: event.target.name,
                      value: event.target.value,
                    })
                  }
                  onKeyDown={blockInvalidChar}
                  placeholder="11/25"
                  maxlength="5"
                />
                <Input
                  type="number"
                  name="cvc"
                  value={user.cvc}
                  placeholder="CVC"
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
                />
              </div>
            </form>
            <span
              onClick={() => {
                toast({
                  title: "Kart yadda saxlanıldı!",
                  position: "top-right",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }}
              class="save_card"
            >
              Save Card
            </span>
          </div>
          <div class="e_payment">
            <div class="pay">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png"
                alt=""
              />
            </div>
            <div class="pay">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5977/5977576.png"
                alt=""
              />
            </div>
            <div class="pay">
              <img
                src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
                alt=""
              />
            </div>
          </div>
          <button class="confirm_btn">Confirm</button>
        </section>
        <section class="order_summary">
          <h2 class="order_head">Order Summary</h2>
          <div class="order_price">
            <hr />
            <div class="price">
              <p>Order price:</p>
              <p>${product.price}</p>
            </div>
            <div class="price">
              <p>Shipping:</p>
              <p>${shipping}</p>
            </div>
            <div class="price">
              <p>Tax:</p>
              <p>${tax}</p>
            </div>
            <br />
            <hr />
            <div class="total_price">
              <p class="dark">Total:</p>
              <p class="dark">${shipping + tax + product.price}</p>
            </div>
          </div>
          <img
            class="qr_code"
            src="https://cdn-icons-png.flaticon.com/512/714/714390.png"
            alt=""
          />
          <p class="condition">
            Pay and Confirm Order by QR Code Using <b>Mobile Application</b>
          </p>
          <button class="review_btn">Review and Confirm</button>
        </section>
      </div>
    </main>
  );
};

export default Paypal;
