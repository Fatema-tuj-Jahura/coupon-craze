import React from 'react';
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';
// import { FaHandshake } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-green-700 flex items-center justify-between py-4 px-8 text-white">
           
            <img src={logo} alt="" />
            <div className="flex gap-4">
                <Link to='login' className="btn px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg shadow-md transition duration-300">
                    Login
                </Link>
                <Link to='register' className="btn px-4 py-2 bg-[#77DD77] hover:bg-[#D0F0C0] text-white  font-semibold rounded-lg shadow-md transition duration-300">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
