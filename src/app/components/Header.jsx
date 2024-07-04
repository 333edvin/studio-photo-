'use client'
import '../globals.css'
import React, { useState } from 'react'
function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>


<nav className="fixed w-full Header top-0  p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">Clicks</div>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="text-white">About</a>
          <a href="#portfolio" className="text-white">Portfolio</a>
          <a href="#services" className="text-white">Services</a>
          <a href="#contact" className="text-white">Contact</a>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col items-center justify-center h-full w-48 space-y-4">
          <a href="#about" className="block text-white py-2 px-4">About</a>
          <a href="#portfolio" className="block text-white py-2 px-4">Portfolio</a>
          <a href="#services" className="block text-white py-2 px-4">Services</a>
          <a href="#contact" className="block text-white py-2 px-4">Contact</a>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  

    </>
  )
}

export default Header