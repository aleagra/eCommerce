import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

function Checkout() {
  const { items, cartTotal } = useCart();
  return (
    <>
      <div className="grid-rows-[80px-1fr]  ">
        <div className="w-[1440px] h-screen mx-auto grid grid-cols-[800px_1fr] gap-20">
          <div className="w-full h-full col-start-1 py-10">
            <h1 className="text-xl font-bold text-[#5e656c]">
              Personal information
            </h1>
            <div className="w-full h-[350px] items-center grid grid-cols-2 grid-rows-3 gap-10 gap-y-6 bg-white rounded-sm py-6">
              <div className="flex flex-col">
                <label htmlFor="input1" className="font-bold text-[#5e656c]">
                  Firt Name
                </label>
                <input
                  type="text"
                  id="input1"
                  name="input1"
                  placeholder="Type first name"
                  className="rounded-md border-2 border-[#e5e8ee] p-2 px-4 outline-none mt-1 focus:border-[#201c27]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="input2"
                  className="font-semibold text-[#201c27]"
                >
                  Movile number
                </label>
                <input
                  type="text"
                  id="input2"
                  name="input2"
                  placeholder="Type movile number"
                  className="rounded-md border-2 border-[#e5e8ee] p-2 px-4 outline-none mt-1 focus:border-[#201c27]"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="input3"
                  className="font-semibold text-[#201c27]"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="input3"
                  name="input3"
                  placeholder="Type Email Address"
                  className="rounded-md border-2 border-black/10 p-2 px-4 outline-none mt-1 focus:border-[#201c27]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="input4"
                  className="font-semibold text-[#201c27]"
                >
                  City
                </label>
                <input
                  type="text"
                  id="input4"
                  name="input4"
                  placeholder="Type city"
                  className="rounded-md border-2 border-black/10 p-2 px-4 outline-none mt-1 focus:border-[#201c27]"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="input5"
                  className="font-semibold text-[#201c27]"
                >
                  State
                </label>
                <input
                  type="text"
                  id="input5"
                  name="input5"
                  placeholder="Choose"
                  className="rounded-md border-2 border-black/10 p-2 px-4 outline-none mt-1 focus:border-[#201c27]"
                />
              </div>
              <div className="flex flex-col ">
                <label
                  htmlFor="input6"
                  className="font-semibold text-[#201c27]"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="input6"
                  name="input6"
                  className="rounded-md border-2 border-black/10 p-2 px-4 outline-none mt-1 focus:border-[#201c27]"
                />
              </div>
            </div>
          </div>
          <div className="col-start-2 bg-[#fafafa] w-full py-10 grid grid-rows-[40px_1fr_260px]">
            <h1 className="mb-4 text-center text-xl font-bold text-[#201c27]">
              Order Summary
            </h1>
            <div className="w-full h-[450px] overflow-y-scroll custom-scrollbar px-6">
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
                          <span className="p-[4px] h-fit text-[8px] rounded-full text-white bg-[#201c27]">
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
            <div className="w-full h-full text-base py-10 mt-auto flex flex-col justify-end px-10">
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
              <button className="text-lg w-full py-2 text-white bg-[#201c27]">
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
