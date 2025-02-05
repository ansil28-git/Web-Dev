import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { FaBars } from "react-icons/fa";



function Navbar() {
 const [istrue,setIstrue] =useState (false)

 const Change =()=>{

  setIstrue(!istrue);
 };

 const HandleLinkClick = (event) => {
  setIstrue(false);
 }
  return (
    <div>
      <nav className=" bg-amber-600 h-16 flex items-center justify-between  fixed-top">
          <div className="ml-4 flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-40 w-auto mb-7 ml-[-25px]" />
          </div>
          <div className=" mr-4  space-x-4 hidden sm:flex">
            <a  href="#home" className="text-white  transition duration-300 transform hover:scale-105">Home</a>
            <a href="#about" className="text-white transition duration-300 transform hover:scale-105">About</a>
            <a href="#service" className="text-white transition duration-300 transform hover:scale-105">Services</a>
            <a href="#contact" className="text-white transition duration-300 transform hover:scale-105">Contact</a>
          </div>
          <button onClick={Change}  className="sm:hidden ml-auto p-4 text-3xl"><FaBars className="text-white text-3xl hove"/></button>
      </nav>
      <div>
      <div className={`transition-opacity duration-300 ${istrue ? 'opacity-100' : 'opacity-0'}`}>
        {istrue && (
          <div className="space-x-4 space-y-7 fixed top-0 left-0 right-0 flex flex-col items-center sm:hidden  bg-amber-500 bg- h-70 pt-18 z-30 ">
            <a onClick={HandleLinkClick} href="#home" className="text-white transition duration-300 transform hover:scale-105">Home</a>
            <a onClick={HandleLinkClick} href="#about" className="text-white transition duration-300 transform hover:scale-105">About</a>
            <a onClick={HandleLinkClick} href="#service" className="text-white transition duration-300 transform hover:scale-105">Services</a>
            <a onClick={HandleLinkClick}href="#contact" className="text-white transition duration-300 transform hover:scale-105 mr-5">Contact</a>
          </div>
        )}
      </div>
     </div>
    </div>
  );
}

export default Navbar;