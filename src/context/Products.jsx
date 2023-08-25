import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/product")
      .then((response) => {
        const mappedProducts = response.data.map((product) => ({
          ...product,
          id: product._id,
        }));
        setProducts(mappedProducts);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
