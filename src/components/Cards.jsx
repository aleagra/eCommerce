import { CartIcon, HeartIcon } from "../icons";

/* eslint-disable react/prop-types */
const Cards = ({ img, title, price, id, description }) => {
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
          <span className="p-2 bg-blue-600 rounded-lg">
            <CartIcon className={"w-5 h-5 stroke-white"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
