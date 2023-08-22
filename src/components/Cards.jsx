/* eslint-disable react/prop-types */
const Cards = ({ img, title, price, id, description }) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center rounded-lg shadow-md border border-[#e5e5e5]"
    >
      <img src={`./${img}`} alt="" />
      <div className="w-full bg-white p-2 px-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <h2 className="text-xl text-black/40 font-semibold">{description}</h2>
        <h3 className="text-lg font-semibold">${price}</h3>
      </div>
    </div>
  );
};

export default Cards;
