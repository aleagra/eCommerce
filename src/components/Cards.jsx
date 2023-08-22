/* eslint-disable react/prop-types */
const Cards = ({ img, title, price, id }) => {
  return (
    <div key={id} className="flex flex-col items-center">
      <img src={`./${img}`} alt="" />
      <div>
        <span>{title}</span>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Cards;
