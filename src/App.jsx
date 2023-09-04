import { CartProvider } from "react-use-cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Home, Login } from "./pages";
import Details from "./components/Details";
import ProductProvider from "./context/Products";
import { Checkout } from "./components";

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/:id" element={<Details />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
