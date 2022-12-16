import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./context/ProductContextProvider";
import ProductList from "./components/Porductlist/ProductList";
import ProductDetail from "./components/Product Detail/ProductDetail";
import BasketProducts from "./components/Basket Products/BasketProducts";
 function App() {
  return (
    <div>
      <ProductContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
          <Route path="/basketproducts" element={<BasketProducts />} />
          <Route path="/basketproducts/:id" element={<BasketProducts />} />
        </Routes>
      </ProductContextProvider>
    </div>
  );
}

export default App;
