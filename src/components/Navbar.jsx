import { useState } from "react";
import { CartIcon, CloseIcon, HeartIcon, UserIcon } from "../icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import Cart from "../pages/Cart";
import Search from "./ModalSearch";
import ModalSearch from "./ModalSearch";
function Navbar() {
  const navigate = useNavigate();
  var { totalUniqueItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "9px";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflowY = "visible";
    document.body.style.paddingRight = "0px";
  };
  const closeModalPage = () => {
    navigate("/checkout");
  };
  return (
    <>
      <section className=" border-b-2 border-[#e5e5e5]">
        <nav className="w-[1440px] mx-auto items-center flex justify-between py-5 h-[80px]">
          <ul className="flex gap-12 text-black text-xl">
            <NavLink to={"/"} activeclassname={"active"}>
              Home
            </NavLink>
            <li>Sale</li>
            <li>Man</li>
            <li>Woman</li>
            <li>Kids</li>
          </ul>
          <div className="flex gap-6 h-fit items-center">
            <ModalSearch />
            <NavLink>
              <HeartIcon className={"w-6 h-6"} />
            </NavLink>
            <div className="flex relative cursor-pointer" onClick={openModal}>
              <CartIcon className={"w-6 h-6 stroke-[#c5c5c5]"} />
              <span
                className={`px-[3px] absolute right-0 top-0 h-fit rounded-full ${
                  totalUniqueItems > 0
                    ? "bg-[#201c27] text-white text-xs"
                    : "hidden"
                }`}
              >
                {totalUniqueItems}
              </span>
            </div>

            <NavLink
              activeclassname={"active"}
              className={"stroke-[#c5c5c5]"}
              to={"/login"}
            >
              <UserIcon />
            </NavLink>
          </div>
        </nav>
      </section>
      {isModalOpen && (
        <div
          className={`fixed top-0  
        right-0 w-full z-[999] h-full flex  items-center bg-black bg-opacity-60`}
          onClick={closeModal}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            onClick={closeModal}
          ></div>
        </div>
      )}
      <div
        className={`bg-white w-[470px] transition-all z-[999] duration-500 ease-in flex flex-col h-full top-0 absolute ${
          isModalOpen ? "right-0" : "right-[-500px] opacity-0"
        }`}
      >
        <button
          onClick={closeModal}
          className="absolute top-5 right-3 text-gray-600"
        >
          <CloseIcon />
        </button>
        <Cart closeModalPage={closeModalPage} />
      </div>
    </>
  );
}

export default Navbar;
