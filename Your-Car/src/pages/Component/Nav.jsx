import { Menu,X } from "lucide-react";
import { useState,useEffect,useRef} from "react";
import {Link } from "react-scroll"
const Navlinks=()=>{
    return(
        <> 
        <Link to="home" className="text-xl lg:text-3xl font-lora" smooth={true} duration={800}>Home</Link>
        <Link to="about" className="text-xl lg:text-3xl font-lora" smooth={true} duration={800} >About </Link>
        <Link to="service" className="text-xl lg:text-3xl  font-lora" smooth={true} duration={800}>Service</Link>
        <Link to="cars" className="text-xl lg:text-3xl font-lora" smooth={true} duration={800}>Cars</Link>
        <Link to="contact" className="text-xl  lg:text-3xl font-lora" smooth={true} duration={800}>Contacts</Link>
      </>
    )
}
function Nav(){
    const [isOpen,setIsOpen]=useState(false);
    const toggleNavbar=()=>{
        setIsOpen(!isOpen);
    }
    const menuRef=useRef();
    useEffect(()=>{
        const handleClickOutside=()=>{
            if(menuRef.current && !menuRef.current.contains(event.target))
                setIsOpen(false)
        }
        if(isOpen)
            window.addEventListener("mousedown",handleClickOutside);
        return()=>window.removeEventListener("mousedown",handleClickOutside);
            
    })
    return(
        <>
     <div className="ml-auto flex items-center">
        <div className="hidden gap-x-10 md:flex">
            <Navlinks/>
        </div>
        <div className="md:hidden">
            <button onClick={toggleNavbar}>{isOpen? <X/>: <Menu/>}</button>
        </div>
     </div>
     {isOpen&& (
        <div ref={menuRef} className="md:hidden menu absolute bg-custom-black bg-opacity-[80%] backdrop-blur-md flex justify-center flex-col
                            top-[100%] right-0 left-[25%] min-h-screen z-50
                            pl-[10%] text-white font-sans font-custom-700 text-2xl sm:text-3xl">
          <Link to="home" className="py-6" smooth={true} duration={800}>Home</Link>
          <Link to="about" className="py-6" smooth={true} duration={800}>About</Link>
          <Link to="service" className="py-6" smooth={true} duration={800}>Service</Link>
          <Link to="cars" className="py-6" smooth={true} duration={800}>Cars</Link>
          <Link to="contact" className="py-6" smooth={true} duration={800}>Contacts</Link>             
            </div>
     )}
     </>
    )
}
export default Nav;