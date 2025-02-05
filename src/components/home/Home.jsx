import React from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Home() {
  return (
    <div id='home'
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url('/images/home.jpg')", 
        height: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
      className="flex justify-center items-center" 
    >
      <div className='text-center text-amber-50 p-6'>
        <h1 className="font-black text-4xl mb-4">Welcome to WEDEV</h1>
        <p className='text-amber-300 text-lg mb-6'>
          "Crafting Digital Dreams: Where Your Vision Meets Our Design"
        </p>
            <button style={{borderRadius:"10px"}} className='bg-amber-400 font-bold text-sm text-white rounded-full px-6 py-2 transition duration-300 ease-in-out transform hover:bg-amber-500 hover:scale-105'>
                <a href="#about" className="text-white flex items-center ">EXPLORE MORE<IoIosArrowDropdownCircle /></a>
            </button>
      </div>
    </div>
  );
}

export default Home;