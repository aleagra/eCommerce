import { useState } from "react";
import { useCart } from "react-use-cart";
import { CartIcon, HeartIcon } from "../icons";
import { Link } from "react-router-dom";

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
      className="flex flex-col items-center rounded-lg shadow-sm border border-[#e5e5e5] relative w-full h-fit"
    >
      <Link className="relative w-full h-full" to={"/" + id}>
        <img
          src={img}
          alt=""
          className="object-cover w-full h-[300px] m-auto bg-[#f6f6f6]"
        />
        <HeartIcon
          className={
            "w-6 h-6 absolute top-6 right-6 transition-colors duration-500 cursor-pointer"
          }
        />
      </Link>
      <div className="w-full p-2 px-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <h2 className="text-lg text-black/40 font-semibold h-[50px]">
          {description}
        </h2>
        <div className="flex justify-between items-center my-5">
          <h3 className="text-xl font-semibold">${price}</h3>
          {addedToCart ? (
            <span className="p-2 border border-[#e5e5e5] rounded-lg transition-colors duration-500">
              <CartIcon className={"w-5 h-5 stroke-[#e5e5e5]"} />
            </span>
          ) : (
            <span
              className="p-2 bg-blue-600 border border-[#e5e5e5] rounded-lg cursor-pointer"
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
