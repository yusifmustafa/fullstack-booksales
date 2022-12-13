import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Porductlist/ProductList";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
