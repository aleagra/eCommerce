import { ArrowIcon } from "../icons";

const AcordeonItem = ({ title, content, isActive, onClick }) => (
  <div className="">
    <button
      className={`w-full flex justify-between items-center font-semibold py-4 border-b border-black/20 focus:outline-none ${
        isActive ? "" : ""
      }`}
      onClick={onClick}
    >
      {title}
      <span
        className={`transform transition-transform duration-500 ${
          isActive ? "rotate-0" : "rotate-180"
        }`}
      >
        <ArrowIcon />
      </span>
    </button>
    {isActive && <div className="my-2 text-sm">{content}</div>}
  </div>
);
export default AcordeonItem;
