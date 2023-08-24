import { CartProvider } from "react-use-cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Home, Login } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
