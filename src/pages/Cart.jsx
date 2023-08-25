import { useCart } from "react-use-cart";
import { CloseIcon, MinusIcon, PlusIcon } from "../icons";
function Cart() {
  const {
    items,
    totalItems,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,
  } = useCart();

  const cart = () => (
    <>
      <div className="my-4 text-center">
        <span className="text-2xl font-bold">
          {!totalUniqueItems} MI COMPRA ({totalItems})
        </span>
      </div>
      <section className="flex flex-col gap-10">
        {items.map((item) => {
          return (
            <>
              <section
                className="flex bg-[#f6f6f6] gap-10 items-center"
                key={item.id}
              >
                <div className="w-[200px]">
                  <img src={item.img} alt="" className="" />
                </div>

                <div className="flex flex-col justify-center gap-3 px-10 relative">
                  <button
                    className="absolute right-0"
                    onClick={() => removeItem(item.id)}
                  >
                    <CloseIcon />
                  </button>
                  <p className="text-xl font-bold">{item.title}</p>
                  <p className="text-xl ">{item.description}</p>

                  <div className="flex gap-5">
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
                      className="shop-button"
                    >
                      <PlusIcon />
                    </button>

                    <span className="font-bold">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </section>
            </>
          );
        })}
      </section>
    </>
  );
  return <>{cart()}</>;
}
export default Cart;
