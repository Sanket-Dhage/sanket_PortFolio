// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">MyPortfolio</div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <a 
            href="/about" // Change this to the correct URL of your About page
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            About
          </a>
          <Link to="/Skills" className="hover:underline">Skills</Link>

          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
