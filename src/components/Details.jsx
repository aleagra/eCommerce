import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import { ProductContext } from "../context/Products";
import { acordeonItems, items } from "./const";
import Navbar from "./Navbar";
import Acordeon from "./Acordeon";
import { useCart } from "react-use-cart";

const Details = () => {
  const { addItem } = useCart();
  const { id } = useParams();
  // const { products } = useContext(ProductContext);
  const item = items.find((item) => item.id === parseInt(id));
  if (!item) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[1fr_300px] gap-16 mt-10 px-28">
        <div className="flex gap-6 col-start-1 justify-center">
          <img
            src={item.img}
            className="w-[50%] object-contain"
            alt={item.title}
          />
          <img
            src={item.detail}
            className="w-[50%] object-contain"
            alt={item.title}
          />
        </div>
        <div className="flex flex-col col-start-2 h-full w-fit">
          <h1 className="text-2xl font-semibold">{item.title}</h1>
          <p className="text-lg my-2">{item.description}</p>
          <p className="text-xl font-semibold">${item.price}</p>
          <div className="mt-6 flex flex-col gap-5">
            <h4>Seleccionar talle (US)</h4>
            <div className="grid grid-cols-5 grid-rows-3 h-[150px] w-[300px] bg-white gap-2">
              {Array.from({ length: 15 }, (_, index) => (
                <button
                  key={index}
                  className="border border-[#e5e5e5] rounded-lg"
                >
                  {Number.isInteger((index + 8) / 2)
                    ? (index + 8) / 2
                    : ((index + 8) / 2).toFixed(1)}
                </button>
              ))}
            </div>
            <button
              className="w-full bg-black rounded-lg mt-2 text-white py-3"
              onClick={() => {
                addItem(item);
              }}
            >
              Agregar al carrito
            </button>
            <Acordeon items={acordeonItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
