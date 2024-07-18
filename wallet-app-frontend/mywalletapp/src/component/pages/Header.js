import React, { useState } from 'react';



const Header = () => {

 const [isOpen, setIsOpen] = useState(false);

 return (

  <nav className="sticky top-0 z-50 bg-white shadow-lg">

   <div className="max-w-6xl mx-auto px-4">

    <div className="flex justify-between items-center">

     <div className="flex space-x-7">

      <div>

       <a href="#" className="flex items-center py-4 px-2">

        <img src="https://via.placeholder.com/50" alt="Logo" className="h-8 w-8 mr-2" />

        <span className="font-semibold text-gray-500 text-lg">Navbar</span>

       </a>

      </div>

      <div className="hidden md:flex items-center space-x-1">

       <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Home</a>

       <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">About</a>

       <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Services</a>

       <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact</a>

      </div>

     </div>

     <div className="hidden md:flex items-center space-x-3 ">

      <a href="#" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300">Log In</a>

      <a href="#" className="py-2 px-4 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Sign Up</a>

     </div>

     <div className="md:hidden flex items-center">

      <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>

       <svg className="w-6 h-6 text-gray-500 hover:text-blue-500" x-show="!isOpen" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">

        <path d="M4 6h16M4 12h16m-7 6h7" />

       </svg>

      </button>

     </div>

    </div>

   </div>

   <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>

    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>

    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>

    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Services</a>

    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>

    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Log In</a>

    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Sign Up</a>

   </div>

  </nav>

 );

};

export default Header;

