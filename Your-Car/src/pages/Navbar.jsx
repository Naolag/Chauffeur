import Nav from "./Component/Nav";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-white text-black sticky top-0 z-[20] mx-auto flex items-center justify-between border-b border-gray-50 p-8">      
      <p className="text-3xl sml:text-4xl md:text-5xl lg:text-6xl font-lora">
        <span className="text-custom-black font-custom-700">Your</span>
        <span className="font-custom-400">car</span>
      </p>
      <div className="hidden md:flex ml-auto">
        <Nav />
      </div>
      <div className="flex items-center gap-4 md:hidden ml-auto">
        <button className="relative text-black hover:text-gray-700">
          <FaShoppingCart size={30} className="text-gray-500" />
          <span className="absolute aspect-square -top-2 -right-2 bg-custom-black px-1 text-white text-sm">
            3
          </span>
        </button>
        <Nav />
      </div>
      <button className="hidden md:block relative text-black hover:text-gray-700 ml-8 md:mr-20">
        <FaShoppingCart size={30} className="text-gray-500" />
        <span className="absolute aspect-square -top-2 -right-2 bg-custom-black px-1 text-white text-sm">
          3
        </span>
      </button>
    </div>
  );
}

export default Navbar;
