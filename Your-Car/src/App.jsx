import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Navbar from "./pages/Navbar.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import {Link } from "react-scroll"
 export default function App(){
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      </>
  );
}
