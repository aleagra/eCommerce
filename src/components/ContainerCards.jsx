import { useContext } from "react";
import Cards from "./Cards";
import { BRAND_FILTERS } from "./const";
import { ProductContext } from "../context/Products";

const ContainerCards = ({ activeBrandFilter }) => {
  const { products } = useContext(ProductContext);
  const filteredItems =
    activeBrandFilter === BRAND_FILTERS.ALL
      ? products
      : products.filter((item) => item.brand === activeBrandFilter);

  return (
    <div className="gap-12 grid grid-cols-4">
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
