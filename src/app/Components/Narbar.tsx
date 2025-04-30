'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import logo from "../../../public/assets/images/logo.png"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white py-4 px-4 sm:px-6 flex items-center justify-between shadow-sm">
        {/* Logo + Hamburger Menu (mobile) */}
        <div className="flex items-center gap-4">
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu className="text-2xl" />
          </button>
          
          <Image 
            src={logo} 
            alt="Logo" 
            height={57} 
            width={241} 
            className="w-[160px] sm:w-[241px]"
          />
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden lg:flex items-center border border-gray-400 rounded-2xl pl-4 pr-2 h-[52px] w-[321px]">
          <CiSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search for Anything"
            className="ml-2 w-full bg-transparent focus:outline-none"
          />
        </div>

        {/* Course Select - Hidden on mobile */}
        <div className="hidden lg:flex border border-gray-400 rounded-2xl h-[52px] w-[138px] items-center justify-center">
          <select className="text-gray-700 bg-transparent w-full text-center focus:outline-none">
            <option value="">Course</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden lg:flex gap-6 text-gray-700 font-medium">
          <Link href="#" className="hover:text-blue-600">Subscriptions</Link>
          <Link href="#" className="hover:text-blue-600">About</Link>
          <Link href="#" className="hover:text-blue-600">Contact Us</Link>
        </div>

        {/* Cart and Login */}
        <div className="flex items-center gap-4">
          <FiShoppingCart className="text-2xl text-gray-700" />
          <button className="hidden sm:flex h-[52px] w-[88px] border border-gray-400 rounded-full items-center justify-center hover:bg-gray-100">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md w-full px-4 py-4">
          <div className="mb-4">
            <div className="flex items-center border border-gray-400 rounded-2xl pl-4 pr-2 h-[42px] w-full mb-4">
              <CiSearch className="text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Search for Anything"
                className="ml-2 w-full bg-transparent focus:outline-none"
              />
            </div>
            
            <div className="border border-gray-400 rounded-2xl h-[42px] w-full flex items-center justify-center mb-4 ">
              <select className="text-gray-700 bg-transparent w-full flex justify-center items-center text-center focus:outline-none px-2 ml-2">
                <option value="">Course</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 text-gray-700 font-medium border-t pt-4">
            <Link href="#" className="hover:text-blue-600 py-2">Subscriptions</Link>
            <Link href="#" className="hover:text-blue-600 py-2">About</Link>
            <Link href="#" className="hover:text-blue-600 py-2">Contact Us</Link>
            <button className="h-[42px] border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-100 mt-2">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}