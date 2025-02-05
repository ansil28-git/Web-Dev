import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className="bg-orange-500 text-white py-2">
            <div className="container mx-auto text-center">
                <h3 className="text-lg font-bold">WE DEV</h3>
                <p className="mt-1">&copy; {new Date().getFullYear()} All Rights Reserved</p>
                <div className='flex justify-center mt-2 space-x-4'> 
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-200">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition duration-200">
                        <CiTwitter size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;