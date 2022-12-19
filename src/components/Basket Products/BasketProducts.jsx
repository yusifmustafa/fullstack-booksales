import { Button } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
import "./BasketProducts.css";
const BasketProducts = () => {
  const context = useContext(ProductContext);
  const { sendToBasketProduct } = context;
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
          {sendToBasketProduct.map(
            (item) => (
              ((total += item.price * item.count),
              (tax = total / 10),
              (shipping = total / 20)),
              (
                <li key={item.id} className="items odd">
                  <div className="infoWrap">
                    <div className="cartSection">
                      <div>
                        <img src={item?.image} alt="" className="itemImg" />
                      </div>
                      <div style={{ margin: "1rem" }}>
                        <h1>{item?.name}</h1>
                        <div className="deleteandprice">
                          <div className="prodTotal cartSection">
                            <p>${item?.price}</p>
                            <Button
                              onClick={() =>
                                context.deleteBasketProduct(item.BPid)
                              }
                              className="remove"
                              colorScheme="red"
                            >
                              X
                            </Button>
                          </div>
                        </div>
                        <div>
                          <h3>Author: {item?.author}</h3>
                        </div>
                      </div>
                      <div>
                        <h2>Genre: {item?.genre}</h2>
                      </div>
                      <p className="stockStatus"> In Stock</p>
                      <div className="cartSection removeWrap"></div>{" "}
                      <div className="incdecbutton">
                        <div className="buttons">
                          <Button colorScheme="blue">+</Button>
                          <span className="incdecvalue">1</span>
                          <Button colorScheme="blue">-</Button>
                        </div>
                      </div>
                      <div className="addtocartbtn">
                        <Link to={`/paypalpage/${item.id}`}>Add to cart</Link>
                      </div>
                    </div>
                  </div>
                </li>
              )
            )
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
              <a href="#" className="btn continue">
                Checkout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasketProducts;
