/* eslint-disable react/prop-types */
import Cards from "./Cards";
import { BRAND_FILTERS, items } from "./const";
// Ajusta la importación según la ubicación de tus datos

const ContainerCards = ({ activeBrandFilter }) => {
  const filteredItems =
    activeBrandFilter === BRAND_FILTERS.ALL
      ? items
      : items.filter((item) => item.brand === activeBrandFilter);

  return (
    <div className="gap-12 grid grid-cols-4">
      {filteredItems.map((item) => (
        <Cards
          key={item}
          id={item.id}
          title={item.title}
          price={item.price}
          img={item.img}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ContainerCards;
