import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Navbar from "./pages/Navbar.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Cars from "./Cars.jsx";
import CarsGallery from "./pages/CarsGallery.jsx";
import Testimonial from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";
import {Link } from "react-scroll"
 export default function App(){
  return (
    <div className="min-w-[320px]">
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Cars/>
      <CarsGallery/>
      <Testimonial/>
      <Contact/>
      </div>
  );
}
