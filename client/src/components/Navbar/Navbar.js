import { Button } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { ProductContext } from "../../context/ProductContextProvider";

const Navbar = () => {
  let token = sessionStorage.getItem("token");
  const context = useContext(ProductContext);
  const { logOut } = context;
  const navigateToHomePage = () => {
    navigate("/");
  };

  const navigate = useNavigate();
  return (
    token && (
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className="logo">
            <Button className={styles.text} onClick={navigateToHomePage}>
              Məhsullar
            </Button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.icon}>
            <Link className="link" to="/wishlist">
              <i className="fa-solid fa-heart"></i>
            </Link>
            <Link className="link" to="/basketproducts">
              <i className="fas fa-cart-plus"></i>
            </Link>
          </div>
          <Button
            onClick={() => {
              logOut();
            }}
            colorScheme="orange"
          >
            Çıxış
          </Button>
        </div>
      </nav>
    )
  );
};

export default Navbar;
