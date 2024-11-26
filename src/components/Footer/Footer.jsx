import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white py-6">
            <div className="p-8 ">
                <div className='flex  justify-between items-center '>
                    <div className='flex flex-col space-y-2 pb-4'>
                        <h5 className='text-lg font-bold'>Company</h5>
                        <div className="w-1/2">
                          <hr className="border-red-700" />
                        </div>
                        <a className='text-xs text-gray-50' href="">About Us</a>
                        <a className='text-xs text-gray-50' href=''>Our services</a>
                        <a className='text-xs text-gray-50' href="">Privacy Policy</a>
                        <a className='text-xs text-gray-50' href="">Affliate Program</a>
                    </div>
                    <div className='flex flex-col space-y-2 pb-4'>
                        <h5 className='text-lg font-bold'>Get Help</h5>
                        <div className="w-1/2">
                          <hr className="border-red-700" />
                        </div>
                        <a className='text-xs text-gray-50' href="">FAQ</a>
                        <a className='text-xs text-gray-50' href=''>Shipping</a>
                        <a className='text-xs text-gray-50' href="">Returns</a>
                        <a className='text-xs text-gray-50' href="">Order status</a>
                    </div>
                    <div className='flex flex-col space-y-2 pb-4'>
                        <h5 className='text-lg font-bold'>Online Shop</h5>
                        <div className="w-1/2">
                          <hr className="border-red-700" />
                        </div>
                        <a className='text-xs text-gray-50' href="">Watch</a>
                        <a className='text-xs text-gray-50' href=''>Shoes</a>
                        <a className='text-xs text-gray-50' href="">Dress</a>
                        <a className='text-xs text-gray-50' href="">Bag</a>
                    </div>
                    
                </div>
                {/* Horizontal Line */}
                <hr className="border-white pb-4" />
                
                
                <div className="flex flex-col justify-center items-center space-y-2">
                    
                    <div className="text-sm ">
                        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
                    </div>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-700 hover:bg-green-600 rounded-full transition">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-700 hover:bg-green-600 rounded-full transition">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-700 hover:bg-green-600 rounded-full transition">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-700 hover:bg-green-600 rounded-full transition">
                            <FaLinkedinIn />
                        </a>
                        </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
