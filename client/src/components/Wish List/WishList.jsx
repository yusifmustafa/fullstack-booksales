import React, { useContext } from "react";
import "./wishlist.css";
import { useEffect } from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import { ToastContainer } from "react-toastify";

const WishList = () => {
  const context = useContext(ProductContext);
  const { wishListProducts } = context;
  console.log(wishListProducts);
  useEffect(() => {
    context.getWishListProducts();
  }, []);
  return (
    <>
      <div className="favText">
        <h2>Favorit Məhsullar</h2>
        <hr />
      </div>
      {wishListProducts.map((item, index) => (
        <div key={index} className="product-card">
          <div></div>
          <div className="image-container">
            <div className="cover-image product-image">
              <img alt={item?.name} src={item?.image} />
            </div>
          </div>
          <div className="product-info">
            <h3 className="product-name">{item?.name}</h3>
            {/* <p class="regular-price">{item?.price}</p> */}
            <p className="discount-price">₼{item?.price}</p>
            <p className="offer-info">Aprelə qədər bütün məhsullara endirim!</p>
            <button
              onClick={() => {
                context.sendToBasketProducts(item.id);
              }}
              className="add-to-cart"
            >
              <ion-icon name="add-outline"></ion-icon> SƏBƏTƏ ƏLAVƏ ET
            </button>
            <button className="delete-to-cart">
              <ion-icon name="add-outline"></ion-icon> FAVORİTLƏRDƏN SİL
            </button>
            <div className="stock">
              <div className="stock-status"></div>
              <p className="stock-info">50+ hazırda stokda olan say</p>
            </div>
          </div>
          <ToastContainer />
        </div>
      ))}
    </>
  );
};

export default WishList;
