// import { useState } from "react";
// import { useCart } from "react-use-cart";
import { HeartIcon } from "../icons";
import { Link } from "react-router-dom";

const Cards = ({ img, title, price, id, description }) => {
  // const { addItem } = useCart();
  // const [addedToCart, setAddedToCart] = useState(false);

  // const handleAddToCart = () => {
  //   addItem(item);
  //   setAddedToCart(true);
  // };
  return (
    <div
      key={id}
      className="flex flex-col items-center relative w-full h-fit border border-[#e9e9e9] rounded-md transition-all duration-500 hover:scale-105"
    >
      <Link className="relative w-full h-full" to={"/" + id}>
        <img
          src={img}
          alt=""
          className="object-contain w-full h-[300px] m-auto bg-[#f6f6f6]"
        />
        <HeartIcon
          className={
            "w-6 h-6 absolute top-6 right-6 transition-colors duration-500 cursor-pointer"
          }
        />

        <div className="w-full py-4 px-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <h2 className="text-base text-black/40 font-medium">{description}</h2>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold mt-2">${price}</h3>
            {/* {addedToCart ? (
            <span className="p-2 border border-[#e5e5e5] rounded-lg transition-colors duration-500">
              <CartIcon className={"w-5 h-5 stroke-[#e5e5e5]"} />
            </span>
          ) : (
            <span
              className="p-2 bg-[#201c27] border border-[#e5e5e5] rounded-lg cursor-pointer"
              onClick={handleAddToCart}
            >
              <CartIcon className={"w-5 h-5 stroke-white"} />
            </span>
          )} */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
