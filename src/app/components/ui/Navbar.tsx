"use client"
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="md:block hidden">
      <nav className="px-16 py-6 flex justify-between items-center">
        <h2 className="font-extrabold text-2xl text-gray-700">
          MD ZAHED <span className="text-blue-600">IQBAL</span>
        </h2>
        <ul className="grid grid-cols-6 gap-6 text-gray-600 font-bold hover:cursor-pointer">
          <li className="hover:text-blue-600"><Link href="#home">Home</Link></li>
          <li className="hover:text-blue-600"><Link href="#about">About</Link></li>
          <li className="hover:text-blue-600"><Link href="#service">Service</Link></li>
          <li className="hover:text-blue-600"><Link href="#project">Projects</Link></li>
          <li className="hover:text-blue-600"><Link href="#skill">Skills</Link></li>
          <li className="hover:text-blue-600"><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
