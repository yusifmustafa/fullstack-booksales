import React from "react";
import "./wishlist.css";

const WishList = () => {
  return (
    <div class="product-card">
      <div class="image-container">
        <div class="cover-image product-image">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.22NHOGduNlgOgLOnTosV3gHaHW%26pid%3DApi&f=1"
            alt=""
          />
        </div>
        <div class="more-image-container">
          <div class="more-image product-image">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alternate.nl%2Fp%2F600x600%2Fk%2FRazer_Kraken___Kitty_Edition___Quartz_gaming_headset%40%40kh-r59_31.jpg&f=1&nofb=1"
              alt=""
            />
          </div>
          <div class="more-image product-image">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komplett.no%2Fimg%2Fp%2F1144%2F1146947_6.jpg&f=1&nofb=1"
              alt=""
            />
          </div>
          <div class="more-image product-image">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komplett.no%2Fimg%2Fp%2F870%2F1146947_4.jpg&f=1&nofb=1"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="product-info">
        <a href="#" class="free-shipping">
          Free shipping
        </a>
        <h3 class="product-name">
          Razer Kraken Kitty Edt Gamming Headset Quartz
        </h3>
        <p class="regular-price">1599$</p>
        <p class="discount-price">799$</p>
        <p class="offer-info">
          The offer is valid until April 3 or as long as stock losts!
        </p>
        <a href="#" class="add-to-cart">
          <ion-icon name="add-outline"></ion-icon> Add to cart
        </a>
        <div class="stock">
          <div class="stock-status"></div>
          <p class="stock-info">50+ pcs. in stock.</p>
        </div>
        <div class="buttons">
          <a href="#" class="button">
            <ion-icon name="bag-add-outline"></ion-icon> Add to cart
          </a>
          <a href="#" class="button">
            <ion-icon name="heart-outline"></ion-icon> Add to wishlist
          </a>
        </div>
      </div>
    </div>
  );
};

export default WishList;
