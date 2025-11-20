'use client'

import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-3xl font-extrabold text-orange-500 tracking-wider">
          Ignite Fitness
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="hover:text-orange-500 transition duration-300 text-lg font-medium">Home</a>
          <a href="#" className="hover:text-orange-500 transition duration-300 text-lg font-medium">About</a>
          <a href="#" className="hover:text-orange-500 transition duration-300 text-lg font-medium">Classes</a>
          <a href="#" className="hover:text-orange-500 transition duration-300 text-lg font-medium">Trainers</a>
          <a href="#" className="hover:text-orange-500 transition duration-300 text-lg font-medium">Contact</a>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300 shadow-md">
            Join Now
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 pb-4 text-center">
          <div className="flex flex-col space-y-4 px-4">
            <a href="#" className="block hover:text-orange-500 transition duration-300 text-lg font-medium">Home</a>
            <a href="#" className="block hover:text-orange-500 transition duration-300 text-lg font-medium">About</a>
            <a href="#" className="block hover:text-orange-500 transition duration-300 text-lg font-medium">Classes</a>
            <a href="#" className="block hover:text-orange-500 transition duration-300 text-lg font-medium">Trainers</a>
            <a href="#" className="block hover:text-orange-500 transition duration-300 text-lg font-medium">Contact</a>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300 shadow-md mt-4">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;