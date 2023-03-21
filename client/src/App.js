import "./App.css";
import Routing from "./Routes/Routing";
import ProductContextProvider from "./context/ProductContextProvider";
function App() {
  return (
    <div>
      <ProductContextProvider>
        <Routing />
      </ProductContextProvider>
    </div>
  );
}

export default App;
