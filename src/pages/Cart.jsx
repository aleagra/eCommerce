import { useCart } from "react-use-cart";
import { CloseIcon, MinusIcon, PlusIcon } from "../icons";
import { NavLink } from "react-router-dom";

function Cart() {
  const {
    items,
    totalItems,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  const empy = () => (
    <div className="flex w-full h-full items-center justify-center">
      <h1 className="text-2xl font-semibold">El carrito esta vacio</h1>
    </div>
  );

  const cart = () => (
    <>
      <div className="py-4 text-center bg-[#f6f6f6]">
        <span className="text-xl">
          {!totalUniqueItems} MI COMPRA ({totalItems})
        </span>
      </div>
      <section className="flex flex-col h-full gap-6 overflow-y-scroll custom-scrollbar  mb-10 bg-[#f6f6f6]">
        {items.map((item) => {
          return (
            <>
              <section
                className="flex bg-[#f6f6f6] justify-center gap-8 px-4 relative border-b border-black/30 items-center"
                key={item.id}
              >
                <button
                  className="absolute left-8 top-3"
                  onClick={() => removeItem(item.id)}
                >
                  <CloseIcon />
                </button>

                <div className="w-[200px]">
                  <img src={item.img} alt="" className="" />
                </div>

                <div className="flex flex-col gap-3 relative">
                  <NavLink to={"/" + item.id}>
                    <p className="text-lg font-bold">{item.title}</p>
                  </NavLink>

                  <p className="text-base ">{item.description}</p>

                  <div className="flex gap-5 w-[230px]">
                    <button
                      className=""
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      <MinusIcon />
                    </button>
                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className=""
                    >
                      <PlusIcon />
                    </button>

                    <span className="font-bold w-[100px] text-center">
                      ${Math.round(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </section>
            </>
          );
        })}
        <div className="w-full flex items-center py-4 gap-4 px-6 flex-col mt-auto">
          <div className="w-full text-xl flex justify-between ">
            <span>Total</span>
            <span className=" font-bold">${cartTotal}</span>
          </div>
          <button className="text-xl w-full py-3 rounded-lg text-white bg-[#476dea]">
            Realizar compra
          </button>
          <p className="px-16 text-sm text-center">
            Las promociones y costo de envío lo verás aplicado en el checkout
          </p>
        </div>
      </section>
    </>
  );
  return <>{cartTotal <= 0 ? empy() : cart()}</>;
}
export default Cart;
