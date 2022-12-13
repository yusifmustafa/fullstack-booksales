import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Porductlist/ProductList";
import ProductContextProvider from "./context/ProductContextProvider";
import Card from "./components/Card/Card";
function App() {
  return (
    <div>
      <ProductContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </ProductContextProvider>
    </div>
  );
}

export default App;
