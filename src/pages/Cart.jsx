import { useCart } from "react-use-cart";
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
      <div className="">
        <h5 className="">
          {!totalUniqueItems} ITEMS TOTALES: ({totalItems})
        </h5>
      </div>
      <section className="">
        {items.map((Element) => {
          return (
            <>
              <section className="">
                <div className="">
                  <img src={Element.img} alt="" />
                </div>

                <div className="">
                  <p className="">{Element.title}</p>

                  <p className="">PRECIO: {Element.price}</p>

                  <p className="">CANTIDAD: {Element.quantity}</p>
                </div>

                <div className="">
                  <button
                    onClick={() =>
                      updateItemQuantity(Element.id, Element.quantity + 1)
                    }
                    className="shop-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </button>

                  <button
                    className="shop-button"
                    onClick={() =>
                      updateItemQuantity(Element.id, Element.quantity - 1)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>

                  <button
                    className="shop-button"
                    onClick={() => removeItem(Element.id)}
                  >
                    Eliminar
                  </button>
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
