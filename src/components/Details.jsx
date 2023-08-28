import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/Products";
import { items } from "./const";

const Details = () => {
  const { id } = useParams();
  // const { products } = useContext(ProductContext);
  const item = items.find((item) => item.id === parseInt(id));

  console.log(item);
  if (!item) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.img} alt={item.title} />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
};

export default Details;
