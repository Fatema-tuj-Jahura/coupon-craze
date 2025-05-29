import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import logo from '../../assets/Logo.png';
import { FaHome, FaBuilding, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import 'animate.css';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <nav className="bg-green-700 text-white px-6 sm:px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Mobile User Info */}
        <div className="md:hidden flex items-center gap-2">
          {user && (
            <>
              {user.photoURL && (
                <img
                  className="w-8 h-8 rounded-full"
                  src={user.photoURL}
                  alt="User"
                />
              )}
              <div className="text-sm font-semibold">
                {user.displayName}
              </div>
            </>
          )}
        </div>

        {/* Desktop User Info */}
        <div className="hidden md:flex items-center gap-4">
          {user && (
            <>
              <div className="text-lg font-semibold animate__animated animate__zoomIn animate__delay-5s animate__slower">
                Welcome {user.displayName}, {user.email}
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          <Link to="/" className="flex items-center gap-2 hover:text-yellow-400">
            <FaHome /> Home
          </Link>
          <Link to="/brands" className="flex items-center gap-2 hover:text-yellow-400">
            <FaBuilding /> Brands
          </Link>
          {user && (
            <Link to='/my-profile' className="flex items-center gap-2 hover:text-yellow-400">
              <FaUser /> My Profile
            </Link>
          )}

          {/* User Avatar */}
          {user && user?.photoURL && (
            <div className="ml-2">
              <img
                className="w-8 h-8 rounded-full"
                src={user?.photoURL}
                alt="User"
              />
            </div>
          )}

          {/* Auth Buttons */}
          {user ? (
            <button
              onClick={handleLogOut}
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg shadow-md transition"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link to="/login" className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg shadow-md transition">
                Login
              </Link>
              <Link to="/register" className="bg-[#77DD77] hover:bg-[#D0F0C0] px-4 py-2 rounded-lg shadow-md transition">
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 bg-green-800 p-4 rounded-lg">
          <Link to="/" className="flex items-center gap-2 hover:text-yellow-400">
            <FaHome /> Home
          </Link>
          <Link to="/brands" className="flex items-center gap-2 hover:text-yellow-400">
            <FaBuilding /> Brands
          </Link>
          {user && (
            <Link to="/my-profile" className="flex items-center gap-2 hover:text-yellow-400">
              <FaUser /> My Profile
            </Link>
          )}

          {/* Auth Buttons */}
          {user ? (
            <button
              onClick={handleLogOut}
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg shadow-md transition"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link to="/login" className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg shadow-md transition">
                Login
              </Link>
              <Link to="/register" className="bg-[#77DD77] hover:bg-[#D0F0C0] px-4 py-2 rounded-lg shadow-md transition">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
