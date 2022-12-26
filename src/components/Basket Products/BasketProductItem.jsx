import React, { useContext } from "react";

import { Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
const BasketProductItem = (props) => {
  const { item } = props;

  const context = useContext(ProductContext);
  const { incrementValue, decrementValue } = context;
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
                  <p>₼{item?.price}</p>
                  <Button
                    onClick={() => context.deleteBasketProduct(item.BPid)}
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
                  colorScheme="blue"
                  onClick={() => incrementValue(item.id)}
                >
                  +
                </Button>
                <span className="incdecvalue">{item.count}</span>
                <Button
                  onClick={() => decrementValue(item.id)}
                  disabled={item.count === 1}
                  colorScheme="blue"
                >
                  -
                </Button>
              </div>
            </div>
            <Link className="addtocartbtn" to={`/paypalpage/${item.BPid}`}>
              İndİ Al
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};

export default BasketProductItem;
