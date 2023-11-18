"use client"
import { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { AiFillHome, AiFillTool } from 'react-icons/ai';
import ThemeChanger from './ThemeChanger';
import { FaCircleInfo } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dark:bg-slate-800 bg-teal-700 py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold">Minia University</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>
        <div className="hidden md:flex md:items-center space-x-4 items-center">
          <a href="#" className="flex items-center text-white text-lg">
            <AiFillHome className="mr-2" /> Home
          </a>
          <a href="#" className="flex items-center text-white text-lg">
            <FaCircleInfo  className="mr-2" /> About
          </a>
          <a href="#" className="flex items-center text-white text-lg">
            <AiFillTool className="mr-2" /> Services
          </a>
          <a href="#" className="flex items-center text-white text-lg">
            <IoMailSharp className="mr-2" /> Contact
          </a>
          <span href="" className="mt-2 text-white">  <ThemeChanger/></span>
        

        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-2">
          <a href="#" className="block text-white px-4 py-2">Home</a>
          <a href="#" className="block text-white px-4 py-2">About</a>
          <a href="#" className="block text-white px-4 py-2">Services</a>
          <a href="#" className="block text-white px-4 py-2">Contact</a>
          <span className="block text-white px-4 py-2"><ThemeChanger/></span>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
