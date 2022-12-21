import { Input, useToast } from "@chakra-ui/react";
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
  const { basketProducts, user, handleOnChange } = context;
  console.log("basketproducts: ", basketProducts);
  useEffect(() => {
    context.getBasketProductsById(id);
  }, [id]);

  let shipping = basketProducts.price / 4;
  let tax = basketProducts.price / 10;
  return (
    <main className="container">
      <div className="main">
        <section className="payment_method">
          <h2 className="ship_head">Payment Method</h2>
          <div className="card_info">
            <div className="card_head">
              <h2 className="card_title">Debit or Credit Card</h2>
            </div>
            <div className="card_types">
              <img
                className="card_img"
                src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                alt=""
              />
              <img
                className="card_img"
                src="https://cdn-icons-png.flaticon.com/512/349/349230.png"
                alt=""
              />
              <img
                className="card_img"
                src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
                alt=""
              />
              <img
                className="card_img"
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
                  maxLength="5"
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
              className="save_card"
            >
              Save Card
            </span>
          </div>
          <div className="e_payment">
            <div className="pay">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png"
                alt=""
              />
            </div>
            <div className="pay">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5977/5977576.png"
                alt=""
              />
            </div>
            <div className="pay">
              <img
                src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
                alt=""
              />
            </div>
          </div>
          <button className="confirm_btn">Confirm</button>
        </section>
        <section className="order_summary">
          <h2 className="order_head">Order Summary</h2>
          <div className="order_price">
            <hr />
            <div className="price">
              <p>Order price:</p>
              <p>${basketProducts.price}</p>
            </div>
            <div className="price">
              <p>Shipping:</p>
              <p>${shipping}</p>
            </div>
            <div className="price">
              <p>Tax:</p>
              <p>${tax}</p>
            </div>
            <br />
            <hr />
            <div className="total_price">
              <p className="dark">Total:</p>
              <p className="dark">
                ${shipping + tax + basketProducts.price * basketProducts.count}
              </p>
            </div>
          </div>
          <img
            className="qr_code"
            src="https://cdn-icons-png.flaticon.com/512/714/714390.png"
            alt=""
          />
          <p className="condition">
            Pay and Confirm Order by QR Code Using <b>Mobile Application</b>
          </p>
          <button className="review_btn">Review and Confirm</button>
        </section>
      </div>
    </main>
  );
};

export default Paypal;
