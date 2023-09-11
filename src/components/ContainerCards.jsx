// import { useContext } from "react";
import Cards from "./Cards";
import { BRAND_FILTERS, items } from "../utils/data";
// import { ProductContext } from "../context/Products";

const ContainerCards = ({ activeBrandFilter }) => {
  // const { products } = useContext(ProductContext);
  const filteredItems =
    activeBrandFilter === BRAND_FILTERS.ALL
      ? items
      : items.filter((item) => item.brand === activeBrandFilter);

  return (
    <div className="gap-x-6 gap-y-10 grid grid-cols-5 mt-6">
      {filteredItems.map((item) => (
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
  );
};

export default ContainerCards;
