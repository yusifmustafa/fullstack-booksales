import { Button, FormLabel, Input } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import "./Paypal.css";
import { FaCheckCircle, FaRegFileAlt } from "react-icons/fa";
import mastercard from "../../Images/mastercard.png";
import { ProductContext } from "../../context/ProductContextProvider";
import { useParams } from "react-router-dom";
export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-", ",", "."].includes(e.key) && e.preventDefault();
const Paypal = () => {
  const { id } = useParams();

  useEffect(() => {
    context.getBasketProductsById(id);
  }, [id]);

  const context = useContext(ProductContext);
  const { handleOnChange, user, basketProducts } = context;
  console.log("basketprodd", basketProducts);
  let total = basketProducts.price * basketProducts.count;
  let shipping = parseInt(total / 8);
  let tax = parseInt(total / 6);
  return (
    <div className="container-md">
      <div className="carditem d-flex flex-wrap">
        <div className="paymentcard col-12 col-md-6 p-5">
          <div className="logoandtext">
            <div className="add_new_cardtext">
              <FaCheckCircle style={{ color: "green" }} />
              <h3>Add new card</h3>
            </div>
            <div className="logo">
              <img src={mastercard} alt="card" />
            </div>
          </div>
          <div className="cardinfo">
            <div className="cardnumber">
              <FormLabel className="col-3">Card number</FormLabel>

              <Input
                className="mb-3"
                type="number"
                name="cardnumber"
                value={user.cardnumber ? user.cardnumber : ""}
                onChange={(event) =>
                  handleOnChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
                onInput={(e) => (e.target.value = e.target.value.slice(0, 16))}
                placeholder="Kart nömrəsi"
              />
            </div>
            <div className="cardowner">
              <FormLabel className="col-3">Card owner</FormLabel>
              <Input
                type="text"
                name="cardowner"
                value={user.cardowner ? user.cardowner : ""}
                onChange={(event) =>
                  handleOnChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
                onInput={(e) => (e.target.value = e.target.value.slice(0, 16))}
                placeholder="Kart nömrəsi"
              />
            </div>
            <div className="dateandcvc">
              <div className="carddate col-12 col-md-6">
                <FormLabel className="col-3 mt-2">Expiry date</FormLabel>
                <Input
                  className="mt-2"
                  type="month"
                  name="date"
                  value={user.date ? user.date : ""}
                  onChange={(event) =>
                    handleOnChange({
                      name: event.target.name,
                      value: event.target.value,
                    })
                  }
                  onInput={(e) =>
                    (e.target.value = e.target.value.slice(0, 16))
                  }
                />
              </div>
              <div className="cardcvc col-12 col-md-6">
                <FormLabel>CVC</FormLabel>
                <Input
                  type="number"
                  name="cvc"
                  value={user.cvc}
                  placeholder="cvc"
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
                />
              </div>
            </div>
          </div>
          <Button
            className="btn"
            float="right"
            marginTop="0.25rem"
            colorScheme="green"
          >
            Təsdiqlə
          </Button>
        </div>
        <section className="col-12 col-md-4 ordersummary">
          <div className="order_summary_text">
            <FaRegFileAlt />
            <h3>Satış Xülasəsi</h3>
          </div>
          <div className="product_detail">
            <div className="product_name">
              <h2> Məhsulun adı</h2>
            </div>
            <div className="price_portion">
              <h3 className="portion">Ədəd</h3>
              <h3 className="price">Qiymət</h3>
            </div>
          </div>
          <div
            style={{
              borderTop: "2px solid rgb(210, 210, 210) ",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}
          ></div>
          <div className="product_about">
            <div className="product_name_img">
              <img src={basketProducts.image} alt="book" />
              <h3>{basketProducts.name}</h3>
            </div>
            <div className="price_portion">
              <h3>(x1)</h3>
              <b>
                <h4>₼{basketProducts.price}</h4>
              </b>
            </div>
          </div>
          <div
            style={{
              borderTop: "2px solid rgb(210, 210, 210) ",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}
          ></div>
          <div className="total">
            <h2>
              Ədəd <b>(1x)</b>
            </h2>
            <h4>
              Karqo haqqı:<b>{shipping}₼</b>
            </h4>
            <h5>
              Vergi haqqı:<b>{tax}₼</b>
            </h5>
          </div>
          <div
            style={{
              borderTop: "2px solid rgb(210, 210, 210) ",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
            }}
          ></div>
          <h3 className="total_price">
            Toplam qİymət:<b>{total}₼</b>
          </h3>
          <div className="qr_code">
            <div id="qr4" class="da-code"></div>
            <h2>
              Ödənişi <b>QR code</b> ilə edə bilərsiniz
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Paypal;
