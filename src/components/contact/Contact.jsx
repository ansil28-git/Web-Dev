import React from 'react';
import { TbMessageChatbotFilled } from "react-icons/tb";

function Contact() {
  return (
    <div className='container mx-auto p-6 mt-11 md:space-y-10 mb-14'>
      <div className='text-center'>
        <h1 className='pt-6 mt-60 font-bold text-30'>CONTACT <span className='text-amber-600'>US</span></h1>
        <p className='text-xs font-black text-amber-600'>DROP A MESSAGE WE WILL CONTACT YOU SOON</p>
        <div className='flex justify-center mt-4'>
          <p className='text-amber-700 text-4xl'>
            <TbMessageChatbotFilled />
          </p>
        </div>
      </div>
      <div className='w-full flex md:w-xl items-center justify-center mx-auto shadow-md p-7 rounded-2xl'>
        <form className='p-6 flex flex-col md:w-4/6 w-full shadow-xl shadow-amber-500' action="">
          <input className='mb-4 p-2 rounded-xl  focus:outline-amber-300  shadow-sm shadow-gray-400 ' type="text" placeholder='Name' required />
          <input className='mb-4 p-2 rounded-xl  focus:outline-amber-300 shadow-sm shadow-gray-400' type="email" placeholder='Email' required />
          <textarea className='mb-4 p-2 rounded-xl h-30  focus:outline-amber-300 shadow-sm shadow-gray-400' placeholder='optional'></textarea>
          <button 
            style={{ borderRadius: "18px" }} 
            className='p-3 text-amber-50 bg-amber-600 font-black hover:bg-amber-700 transition duration-200'
          >
            DROP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;