import { useSelector } from "react-redux";

export default function Cart() {
  const data = useSelector((state) => state.cart.items); // ✅ Actually gets the data

  return (
    <div>
      {data.map((d, i) => (
        <div key={i} className="">

          <div  className="absolute bg-custom-black backdrop-blur-[10px]   flex justify-center flex-col
                                      top-[100%] right-0 left-[70%] min-h-screen z-50
                                      pl-[30%] text-white font-sans font-custom-700">

                           <div className="bg-white flex mx-auto max-w-[80%]">
                               <div>
                                   <div>
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div>
                                  <img
                                    src={d.image}
                                    alt={d.name}
                                    className="w-full max-w-96 md:max-w-none h-auto object-contain mb-4 rounded-md"
                                  />
                                </div>
                           </div>
                      </div>
        </div>
      ))}
    </div>
  );
}
