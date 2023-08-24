import { useState } from "react";
import { useCart } from "react-use-cart";
import { CartIcon, HeartIcon } from "../icons";

const Cards = ({ img, title, price, id, description, item }) => {
  const { addItem } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addItem(item);
    setAddedToCart(true);
  };
  return (
    <div
      key={id}
      className="flex flex-col items-center rounded-lg shadow-md border border-[#e5e5e5]"
    >
      <div className="relative">
        <img src={`./${img}`} alt="" />
        <HeartIcon
          className={
            "w-6 h-6 absolute top-6 right-6 transition-colors duration-500 cursor-pointer"
          }
        />
      </div>
      <div className="w-full bg-white p-2 px-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <h2 className="text-xl text-black/40 font-semibold">{description}</h2>
        <div className="flex justify-between items-center my-5">
          <h3 className="text-xl font-semibold">${price}</h3>
          {addedToCart ? (
            <span className="p-2 border border-[#e5e5e5] rounded-lg transition-colors duration-500">
              <CartIcon className={"w-5 h-5 stroke-[#e5e5e5]"} />
            </span>
          ) : (
            <span
              className="p-2 bg-blue-600 rounded-lg"
              onClick={handleAddToCart}
            >
              <CartIcon className={"w-5 h-5 stroke-white"} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
