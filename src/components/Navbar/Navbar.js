import { Badge, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">BookSales</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <div className={styles.icon}>
           <i className="fas fa-cart-plus"></i>
         </div>
        <Link to="/signin">
          <Button colorScheme="blue">Login</Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="blue">Register</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
