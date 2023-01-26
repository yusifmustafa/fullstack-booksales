import { Button } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
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
          <Link to="/wishlist">
            <i class="fa-solid fa-heart"></i>
          </Link>
          <Link to="/basketproducts">
            <i className="fas fa-cart-plus"></i>
          </Link>
        </div>
        <Link to="/signin">
          <Button colorScheme="orange">Giriş</Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="orange">Qeydiyyat</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
