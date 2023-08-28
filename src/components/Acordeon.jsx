import { useState } from "react";
import AcordeonItem from "./AcordeonItems";

const Acordeon = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AcordeonItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={index === activeIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};
export default Acordeon;
