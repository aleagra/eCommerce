import { useState } from "react";
import { useCart } from "react-use-cart";
import { useParams } from "react-router-dom";
import { items, acordeonItems } from "../utils/data";
import { Navbar, Acordeon, Cards, ImageModal } from "../components/";

const Details = () => {
  const { addItem } = useCart();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectSize, setSelectSize] = useState(null);
  const item = items.find((item) => item.id === parseInt(id));

  // Inicializa selectedImage con item.img
  const [selectedImage, setSelectedImage] = useState(item.img);

  if (!item) {
    return <p>Producto no encontrado</p>;
  }

  const sameBrandShoes = items.filter(
    (shoe) => shoe.brand === item.brand && shoe.id !== item.id
  );

  const closeModal = () => {
    setSelectedImage(item.img); // Restablece la imagen a item.img al cerrar el modal
    setIsModalOpen(false);
  };

  const handleSelectSize = (talle) => {
    setSelectSize(talle);
  };

  const addItemToCart = () => {
    if (selectSize) {
      const itemWithSize = {
        ...item,
        size: selectSize,
      };

      addItem(itemWithSize);
    } else {
      alert("Por favor, selecciona un talle antes de agregar al carrito.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[900px_300px] w-[1200px] mx-auto my-16">
        <div className="flex w-fit col-start-1 gap-8">
          <div className="grid grid-rows-3 gap-y-8 h-fit">
            <img
              src={item.img}
              alt=""
              className="w-[100px] rounded-md bg-[#f6f6f6] hover:bg-black/20 transition-colors duration-200 object-contain"
              onMouseEnter={() => setSelectedImage(item.img)}
            />
            <img
              src={item.detail}
              alt=""
              className="w-[100px] rounded-md bg-[#f6f6f6] hover:bg-black/20 transition-colors duration-200 object-contain"
              onMouseEnter={() => setSelectedImage(item.detail)}
            />
            <img
              src={item.img}
              alt=""
              className="w-[100px] rounded-md bg-[#f6f6f6] hover:bg-black/20 transition-colors duration-200 object-contain"
              onMouseEnter={() => setSelectedImage(item.img)}
            />
          </div>
          <img
            src={selectedImage}
            className="w-[65%] object-contain bg-[#f6f6f6] shadow-sm rounded-md"
            alt={item.title}
          />
        </div>
        <div className="flex flex-col col-start-2 h-full w-fit pt-2">
          <h1 className="text-3xl font-semibold">{item.title}</h1>
          <p className="text-lg my-1">{item.description}</p>
          <p className="text-xl font-semibold">${item.price}</p>
          <div className="mt-4 flex flex-col gap-2">
            <h4 className="text-base">Seleccionar talle (US)</h4>
            <div className="grid grid-cols-5 grid-rows-3 h-[150px] w-[300px] gap-2">
              {Array.from({ length: 15 }, (_, index) => (
                <button
                  key={index}
                  className={`border border-[#e5e5e5] rounded-md focus:bg-[#201c27] focus:text-white transition-all duration-500 ${
                    (index + 8) / 2 === selectSize
                      ? "bg-[#201c27] text-white"
                      : ""
                  }`}
                  onClick={() => handleSelectSize((index + 8) / 2)}
                >
                  {Number.isInteger((index + 8) / 2)
                    ? (index + 8) / 2
                    : ((index + 8) / 2).toFixed(1)}
                </button>
              ))}
            </div>
            <button
              className="w-full bg-[#201c27] rounded-lg mt-6 text-white py-3"
              onClick={() => {
                addItemToCart(item);
              }}
            >
              Agregar al carrito
            </button>
            <Acordeon items={acordeonItems} />
          </div>
        </div>
      </div>
      <div className="w-[1200px] mx-auto text-2xl pt-10">
        <h1 className="mb-8 font-semibold leading-4">
          También podría interesarte
        </h1>
        <div className="grid grid-cols-4 gap-8 w-[1200px] mb-20">
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
      {isModalOpen && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </>
  );
};

export default Details;
