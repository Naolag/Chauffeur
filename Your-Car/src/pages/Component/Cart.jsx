import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity,removeFromCart } from "../../features/cart/cartSlice";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const data = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="fixed top-[14%] right-0 min-h-screen w-[25%] bg-black/60 backdrop-blur-[50px] z-50 p-10 overflow-y-auto">
      {data 
        .filter((d) => d.quantity > 0) 
        .map((d, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 shadow-lg mb-6 flex flex-col gap-4"
          >  
             <div className="flex items-center justify-between">
                <div className="flex flex-col items-start gap-5">
            <div className="text-center text-2xl font-bold text-Custom-red">
              {d.class}
            </div>
            <div className="text-lg font-semibold text-black">{d.name}</div>
            <div className="flex  gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(d.name))}
                  className="bg-Custom-red text-white text-xl w-8 h-8 rounded"
                >
                  -
                </button>
                <div className="text-black text-lg font-semibold">
                  {d.quantity}
                </div>
                <button
                  onClick={() => dispatch(increaseQuantity(d.name))}
                  className="bg-Custom-red text-white text-xl w-8 h-8 rounded"
                >
                  +
                </button>
              </div>
               <button onClick={()=>dispatch(removeFromCart(d.name))}>
                  <Trash2 size={35}/>
               </button>
              </div>
            </div>
            <div> <img
src={d.image}
alt={d.name}
className="w-36 h-20 object-contain rounded-md"
/></div>
            </div>
          </div>
        ))}
    </div>
  );
}

