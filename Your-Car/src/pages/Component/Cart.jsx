import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../features/cart/cartSlice";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";

export default function Cart() {
  const data = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // 🚫 Prevent body scroll when cart is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed  lg:top-[17.9%] left-0 md:left-[50%] w-full md:w-[50%] h-[85vh] bg-black/80 backdrop-blur-[50px] z-50 p-6 sm:p-10 flex flex-col">
      <div className="flex-1 overflow-y-auto scroll-smooth space-y-6 pr-2">
        {data.filter((d) => d.quantity > 0).map((d, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 shadow-lg flex sm:max-w-[90%] md:max-w-none xl:max-w-[75%] flex-col gap-4 mb-10"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start gap-6 sm:ml-10 md:ml-0">
                <div className="text-center sm:text-2xl font-bold text-Custom-red">
                  {d.class}
                </div>
                <div className="sm:text-lg font-semibold text-black">{d.name}</div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => dispatch(decreaseQuantity(d.name))}
                      className="bg-Custom-red text-white text-xl w-5 sm:w-8 h-8 rounded"
                    >
                      -
                    </button>
                    <div className="text-black text-lg font-semibold">
                      {d.quantity}
                    </div>
                    <button
                      onClick={() => dispatch(increaseQuantity(d.name))}
                      className="bg-Custom-red text-white text-xl w-5 sm:w-8 h-8 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => dispatch(removeFromCart(d.name))}>
                    <Trash2 size={25} />
                  </button>
                </div>
              </div>
              <div>
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-36 h-20 object-contain rounded-md mr-10"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
