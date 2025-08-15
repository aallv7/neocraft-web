'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black to-gray-700 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold tracking-wide">
        <Image 
        src="./img/title.png" 
        alt="" 
        width={160}
        height={90}
        />
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // ikon x
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // ikon garis tiga
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-blue-200 transition duration-300">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/ketentuan" className="text-white hover:text-blue-200 transition duration-300">
              Ketentuan
            </Link>
          </li>
          <li>
            <Link href="/komunitas" className="text-white hover:text-blue-200 transition duration-300">
              Komunitas
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu Mobile legend */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900/50 rounded-lg my-8 py-2 px-5 transition-all delay-150 duration-300 ease-in-out`}>
        <ul className="flex flex-col items-center space-y-3 transition-all delay-150 duration-300 ease-in-out">
          <li>
            <Link href="/" className="block rounded-lg text-white hover:bg-gray-800 hover:scale-105 transition-all delay-150 duration-300 ease-in-out py-2 px-5" onClick={() => setIsOpen(false)}>
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/ketentuan" className="block rounded-lg text-white hover:bg-gray-800 hover:scale-105 transition-all delay-150 duration-300 ease-in-out py-2 px-4" onClick={() => setIsOpen(false)}>
              Ketentuan
            </Link>
          </li>
          <li>
            <Link href="/komunitas" className="block rounded-lg text-white hover:bg-gray-800 hover:scale-105 transition-all delay-150 duration-300 ease-in-out py-2 px-4" onClick={() => setIsOpen(false)}>
              Komunitas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;