/* eslint-disable react/prop-types */
import { BRAND_FILTERS, items } from "./const";
// Ajusta la importación según la ubicación de tus datos

const ContainerCards = ({ activeBrandFilter }) => {
  const filteredItems =
    activeBrandFilter === BRAND_FILTERS.ALL
      ? items
      : items.filter((item) => item.brand === activeBrandFilter);

  return (
    <div className="gap-4 grid grid-cols-4">
      {filteredItems.map((item) => (
        <div key={item.id} className="card">
          <img src={`./${item.img}`} alt={item.title} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ContainerCards;
