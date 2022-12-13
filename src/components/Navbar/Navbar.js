import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
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
