import { CartProvider } from "react-use-cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Home, Login } from "./pages";
import { Navbar } from "./components";
import Details from "./components/Details";
import ProductProvider from "./context/Products";

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Details/:id" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
