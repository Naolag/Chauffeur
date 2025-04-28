import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll"; // ✅ Import from react-scroll, NOT react-router-dom

const Navlinks = () => {
  return (
    <>
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-80}
        className="text-2xl lg:text-3xl font-lora cursor-pointer"
      >
        Home
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-80}
        className="text-2xl lg:text-3xl font-lora cursor-pointer"
      >
        About
      </Link>
      <Link
        to="service"
        smooth={true}
        duration={500}
        offset={-80}
        className="text-2xl lg:text-3xl font-lora cursor-pointer"
      >
        Service
      </Link>
      <Link
        to="cars"
        smooth={true}
        duration={500}
        offset={-80}
        className="text-2xl lg:text-3xl font-lora cursor-pointer"
      >
        Cars
      </Link>
      <Link
        to="contacts"
        smooth={true}
        duration={500}
        offset={-80}
        className="text-2xl lg:text-3xl font-lora cursor-pointer"
      >
        Contacts
      </Link>
    </>
  );
};

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="ml-auto flex items-center px-6 py-4">
        {/* Desktop Menu */}
        <div className="hidden gap-x-10 md:flex">
          <Navlinks />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div
          className="md:hidden absolute bg-custom-black bg-opacity-[80%] backdrop-blur-md flex flex-col items-start
                     top-[100%] right-0 left-[25%] min-h-screen z-50
                     pl-[10%] pt-10 text-white font-sans font-bold text-2xl sm:text-3xl space-y-8"
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            About
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
            onClick={toggleNavbar}
          >
            Service
          </Link>
          <Link
            to="cars"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
            onClick={toggleNavbar}
          >
            Cars
          </Link>
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
            onClick={toggleNavbar}
          >
            Contacts
          </Link>
        </div>
      )}
    </>
  );
}

export default Nav;
