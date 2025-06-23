import Nav from "./Component/Nav";
import { useState, useEffect,useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";
import Cart from "./Component/Cart";
import { useSelector } from "react-redux";

function Navbar() {
  const [isScrolled, setScrolled] = useState(false);
  const [cartOpen,setCartOpen]=useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const toggleCart=()=>{
    setCartOpen(!cartOpen);
  }
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartRef=useRef();
      useEffect(()=>{
          const handleClickOutside=(event)=>{
              if(cartRef.current && !cartRef.current.contains(event.target))
                  setCartOpen(false)
          }
          if(cartOpen)
              window.addEventListener("mousedown",handleClickOutside);
          return()=>window.removeEventListener("mousedown",handleClickOutside);
              
      })

  return (
    <div
      className={`${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } text-black fixed top-0 left-0 w-full z-50 transition-all duration-300 mx-auto flex items-center justify-between border-b border-gray-50 p-8`}
    >
      <p className="text-3xl sml:text-4xl lg:text-6xl font-lora">
        <span className="text-custom-black font-custom-700">Your</span>
        <span className="font-custom-400">car</span>
      </p>

      <div className="hidden md:flex ml-auto pl-5">
        <Nav />
      </div>

      <div className="flex items-center gap-4 md:hidden ml-auto">
        <button onClick={toggleCart} className="relative text-black hover:text-gray-700">
          <FaShoppingCart size={30} className="text-gray-500" />
          <span className="absolute aspect-square -top-2 -right-2 bg-custom-black px-1 text-white text-sm">
          {cartItems.filter(item => item.quantity > 0).length}

          </span>
        </button>
        <Nav />
      </div>

      <button onClick={toggleCart} className="hidden md:block relative text-black hover:text-gray-700 ml-8 md:mr-20">
        <FaShoppingCart size={30} className="text-gray-500" />
        <span className="absolute aspect-square -top-2 -right-2 bg-custom-black px-1 text-white text-sm">
        {cartItems.filter(item => item.quantity > 0).length}

        </span>
      </button>
      {cartOpen&& (
        <div ref={cartRef}>
         <Cart/>
         </div>
      )}

    </div>
  );
}

export default Navbar;
