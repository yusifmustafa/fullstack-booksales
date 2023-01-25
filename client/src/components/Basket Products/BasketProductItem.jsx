import React, { useContext, useState } from "react";
import "./BasketProductItem.css";
import { Button, useToast } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
const BasketProductItem = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { item } = props;
  const toast = useToast();

  const context = useContext(ProductContext);

  const handleIncrement = (id) => {
    if (id === item.id) {
      setQuantity((item.count += 1));
    }
  };

  const handleDecrement = (id) => {
    if (id === item.id) {
      setQuantity((item.count -= 1));
    }
  };

  const handleDeleteProductFromBasket = (id) => {
    context.deleteBasketProduct(id);
    toast({
      title: "Məhsul səbətdən silindi!",
      description:
        "Səbətinizə yeni məhsullar əlavə etmək üçün əsas səhifəyə qayıdın",
      position: "top-right",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    window.location.reload();
  };

  let itemPrice = item.count * item.price;
  props.func(itemPrice);

  return (
    <>
      <li key={item.BPid} className="items odd">
        <div className="infoWrap">
          <div className="cartSection">
            <div className="img-fluid">
              <img src={item?.image} alt="" className="itemImg" />
            </div>
            <div style={{ margin: "1rem" }}>
              <h1 className="name">{item?.name}</h1>
              <div className="deleteandprice">
                <div className="prodTotal cartSection">
                  <p>₼{itemPrice}</p>
                  <Button
                    onClick={() => {
                      handleDeleteProductFromBasket(item.BPid);
                    }}
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
            <p className="stockStatus"> Stokda var</p>
            <div className="cartSection removeWrap"></div>{" "}
            <div className="incdecbutton">
              <div className="buttons">
                <Button
                  onClick={() => {
                    handleIncrement(item.id);
                  }}
                  colorScheme="orange"
                >
                  +
                </Button>
                <span className="incdecvalue">{quantity}</span>
                <Button
                  onClick={() => {
                    handleDecrement(item.id);
                  }}
                  disabled={quantity === 1}
                  colorScheme="orange"
                >
                  -
                </Button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default BasketProductItem;
