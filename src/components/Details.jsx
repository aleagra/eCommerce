import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import { ProductContext } from "../context/Products";
import { items, acordeonItems } from "../utils/data";
import { useCart } from "react-use-cart";
import { Navbar, Acordeon, Cards } from "../components/";

const Details = () => {
  const { addItem } = useCart();
  const { id } = useParams();
  // const { products } = useContext(ProductContext);
  const item = items.find((item) => item.id === parseInt(id));
  if (!item) {
    return <p>Producto no encontrado</p>;
  }
  const sameBrandShoes = items.filter(
    (shoe) => shoe.brand === item.brand && shoe.id !== item.id
  );

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[1fr_380px] gap-20 w-[1440px] mx-auto my-20">
        <div className="flex w-full col-start-1 gap-8">
          <img
            src={item.img}
            className="w-[50%] object-contain bg-[#f6f6f6] shadow-sm"
            alt={item.title}
          />
          <img
            src={item.detail}
            className="w-[50%]  object-contain bg-[#f6f6f6] shadow-sm"
            alt={item.title}
          />
        </div>
        <div className="flex flex-col col-start-2 h-full w-fit pt-2 pl-20">
          <h1 className="text-3xl font-semibold">{item.title}</h1>
          <p className="text-lg my-1">{item.description}</p>
          <p className="text-xl font-semibold">${item.price}</p>
          <div className="mt-4 flex flex-col gap-2">
            <h4 className="text-base">Seleccionar talle (US)</h4>
            <div className="grid grid-cols-5 grid-rows-3 h-[150px] w-[300px] gap-2">
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
              className="w-full bg-black rounded-lg mt-6 text-white py-3"
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
      <div className="w-[1440px] mx-auto text-2xl pt-10">
        <h1 className="mb-8 font-semibold leading-4">
          También podría interesarte
        </h1>
        <div className="grid grid-cols-4 gap-8 w-[1440px] mx-auto mb-20">
          {sameBrandShoes.slice(0, 4).map((item) => (
            <Cards
              item={item}
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
