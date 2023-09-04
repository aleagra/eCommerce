import { useCart } from "react-use-cart";
import { CloseIcon, MinusIcon, PlusIcon } from "../icons";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function Checkout() {
  const {
    items,
    totalItems,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();
  return (
    <>
      <div className="grid-rows-[80px-1fr] h-screen">
        <div className="row-start-1">
          <Navbar />
        </div>
        <div className="w-full grid grid-cols-[1100px_1fr] gap-20 px-36">
          <div className="w-full h-full col-start-1 my-10">
            <h1 className="mb-4 text-xl font-bold text-[#476dea]">
              Personal information
            </h1>
            <div className="w-full h-[350px] items-center grid grid-cols-2 grid-rows-3 gap-10 gap-y-6 bg-white shadow-md rounded-sm p-10">
              <div className="flex flex-col">
                <label htmlFor="input1" className="font-bold text-[#476dea]">
                  Name
                </label>
                <input
                  type="text"
                  id="input1"
                  name="input1"
                  className="rounded-md border-2 border-black/10 p-2 px-4 outline-none mt-1 focus:border-[#476dea]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="input2"
                  className="font-semibold text-[#476dea]"
                >
                  Movile number
                </label>
                <input
                  type="text"
                  id="input2"
                  name="input2"
                  className="rounded-md border-2 border-black/10 p-2 px-4 outline-none mt-1 focus:border-[#476dea]"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="input3"
                  className="font-semibold text-[#476dea]"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="input3"
                  name="input3"
                  className="rounded-md border-2 border-black/10 p-2 px-4 outline-none mt-1 focus:border-[#476dea]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="input4"
                  className="font-semibold text-[#476dea]"
                >
                  City
                </label>
                <input
                  type="text"
                  id="input4"
                  name="input4"
                  className="rounded-md border-2 border-black/10 p-2 px-4 outline-none mt-1 focus:border-[#476dea]"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="input5"
                  className="font-semibold text-[#476dea]"
                >
                  State
                </label>
                <input
                  type="text"
                  id="input5"
                  name="input5"
                  className="rounded-md border-2 border-black/10 p-2 px-4 outline-none mt-1 focus:border-[#476dea]"
                />
              </div>
              <div className="flex flex-col ">
                <label
                  htmlFor="input6"
                  className="font-semibold text-[#476dea]"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="input6"
                  name="input6"
                  className="rounded-md border-2 border-black/10 p-2 px-4 outline-none mt-1 focus:border-[#476dea]"
                />
              </div>
            </div>
          </div>
          <div className="col-start-2 w-full my-10 grid grid-rows-[40px_1fr_260px]">
            <h1 className="mb-4 text-xl font-bold text-[#476dea]">
              Order Summary
            </h1>
            <div className="w-full h-[450px] bg-white overflow-y-scroll custom-scrollbar px-6">
              {items.map((item) => {
                return (
                  <>
                    <section
                      className="flex gap-8 px-6 relative items-center border-b border-black/10"
                      key={item.id}
                    >
                      <div className="">
                        <img
                          src={item.img}
                          alt=""
                          className="w-[200px] object-cover"
                        />
                      </div>

                      <div className="flex flex-col relative w-full mt-2">
                        <NavLink to={"/" + item.id}>
                          <p className="text-base font-bold">{item.title}</p>
                        </NavLink>

                        <div className="flex justify-between pr-3 w-full mt-3 items-center">
                          {/* <button
                            className=""
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <MinusIcon />
                          </button> */}
                          <span className="p-[4px] h-fit text-[8px] rounded-full text-white bg-[#476dea]">
                            {item.quantity}
                          </span>
                          <p className="text-base text-[#7d7d7d] font-semibold">
                            Talle: 12
                          </p>
                          {/* <button
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                            className=""
                          >
                            <PlusIcon />
                          </button> */}

                          <span className="font-bold text-center">
                            ${Math.round(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </section>
                  </>
                );
              })}
            </div>
            <div className="w-full h-full text-base py-10 mt-auto bg-white flex flex-col justify-end px-10">
              <div className="flex justify-between mb-2 font-medium text-[#7d7d7d]">
                <span>Subtotal</span>
                <span className="pr-2 text-black font-bold">${cartTotal}</span>
              </div>
              <div className="flex justify-between pb-2 font-medium text-[#7d7d7d] border-black/30 border-b">
                <span>Shippting</span>
                <span className="pr-2 text-black font-bold">--</span>
              </div>
              <div className="flex justify-between my-5 font-semibold">
                <span>Total (ARS)</span>
                <span className="pr-2">${cartTotal}</span>
              </div>
              <button className="text-lg w-full py-2 text-white bg-[#476dea]">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;