import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-[#3498DB] p-4 top-0 sticky z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Acupressure Therapy</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-[#F7DC6F]">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/services" className="text-white">Services</Link>
          <Link to="/contact" className="text-white">Contact</Link>
          <Link to="/appointment" className="text-white">Book appointment</Link>
    
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden  text-white flex flex-col space-y-2 top-12 ">
          <Link onClick={() => setIsOpen(!isOpen)} to="/" className="p-2">Home</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/about" className="p-2">About</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/services" className="p-2">Services</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/contact" className="p-2">Contact</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/appointment" className="p-2">Book appointment</Link>
        </div>
      )}
    </nav>
    
    </>
  );
};

export default Navbar;
