import React from "react";
import "./Paypal.css";
const Paypal = () => {
  return (
    <main class="container">
      <div class="main">
        <section class="shipping_address">
          <h2 class="ship_head">Shipping Address</h2>
          <div class="addresses">
            <form action="">
              <div class="address_primary">
                <div class="info">
                  <p class="bold">Name:</p>
                  <p class="light">John Doe</p>
                </div>
                <div class="info">
                  <p class="bold">Phone:</p>
                  <p class="light">(305) 345-5678</p>
                </div>
                <div class="info">
                  <p class="bold">Address:</p>
                  <p class="light">312 Everette Alley, Miami, FL 33147</p>
                </div>
              </div>
              <div class="address_secondary">
                <div class="info">
                  <p class="bold">Name:</p>
                  <p class="light">John Doe</p>
                </div>
                <div class="info">
                  <p class="bold">Phone:</p>
                  <p class="light">(305) 345-5678</p>
                </div>
                <div class="info">
                  <p class="bold">Address:</p>
                  <p class="light">209 Marigold Lane, Miami, FL 33169</p>
                </div>
              </div>
            </form>
          </div>
          <span class="new_address">+ add new address</span>
        </section>
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
            <form action="">
              <input
                type="text"
                name="Name"
                value=""
                placeholder="Card Holder"
                maxlength="60"
              />
              <input
                type="text"
                name="Number"
                value=""
                placeholder="Card Number"
                maxlength="16"
              />
              <div>
                <input
                  type="text"
                  name="Name"
                  value=""
                  placeholder="Expire"
                  maxlength="4"
                />
                <input
                  type="text"
                  name="Name"
                  value=""
                  placeholder="CVC"
                  maxlength="3"
                />
              </div>
            </form>
            <span class="save_card">Save Card</span>
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
              <p>$49.99</p>
            </div>
            <div class="price">
              <p>Shipping:</p>
              <p>$5.00</p>
            </div>
            <div class="price">
              <p>Tax:</p>
              <p>$3.25</p>
            </div>
            <br />
            <hr />
            <div class="total_price">
              <p class="dark">Total:</p>
              <p class="dark">$58.24</p>
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
