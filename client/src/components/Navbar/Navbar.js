import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { ProductContext } from "../../context/ProductContextProvider";

const Navbar = () => {
  const context = useContext(ProductContext);
  const { isAuth } = context;
  const navigateToHomePage = () => {
    navigate("/");
  };
  const navigate = useNavigate();
  return (
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
        <Link to="/">
          <Button disabled={isAuth === true} colorScheme="orange">
            Giriş
          </Button>
        </Link>
        <Link to="/signup">
          <Button disabled={isAuth === true} colorScheme="orange">
            Qeydiyyat
          </Button>
          {isAuth && (
            <Button
              onClick={() => {
                context.logOut();
              }}
            >
              Çıxış
            </Button>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
