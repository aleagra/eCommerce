import { useCart } from "react-use-cart";
import { CloseIcon, MinusIcon, PlusIcon } from "../icons";
import { NavLink } from "react-router-dom";

function Cart({ closeModalPage }) {
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
      <div className="py-4 text-center">
        <span className="text-xl">
          {!totalUniqueItems} MI COMPRA ({totalItems})
        </span>
      </div>
      <section className="flex flex-col gap-6 overflow-y-scroll custom-scrollbar h-[560px] mb-10">
        {items.map((item) => {
          return (
            <>
              <section
                className="flex justify-center gap-8 px-4 relative border-b border-black/30 items-center"
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

                <div className="flex flex-col gap-1 relative">
                  <NavLink to={"/" + item.id}>
                    <p className="text-lg font-bold">{item.title}</p>
                  </NavLink>
                  <p className="text-base font-semibold">Talle {item.size}</p>
                  <p className="text-base">{item.description}</p>

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
      </section>
      <div className="w-full flex items-center py-4 gap-4 px-6 flex-col mt-auto mb-8">
        <div className="w-full text-2xl flex justify-between ">
          <span>Total</span>
          <span className=" font-bold">${cartTotal}</span>
        </div>
        <NavLink
          onClick={closeModalPage}
          className={
            "w-full py-3 bg-[#201c27] text-xl mx-auto text-center rounded-lg"
          }
        >
          <button className=" text-white ">Realizar compra</button>
        </NavLink>
        <p className="px-16 text-sm text-center">
          Las promociones y costo de envío lo verás aplicado en el checkout
        </p>
      </div>
    </>
  );
  return <>{cartTotal <= 0 ? empy() : cart()}</>;
}
export default Cart;
