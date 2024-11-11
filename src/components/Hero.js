import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Titles and corresponding colors
  const titles = [
    { title: "Frontend Developer", color: "text-blue-400" },
    { title: "Backend Developer", color: "text-green-400" },
    { title: "App Developer", color: "text-yellow-400" },
    { title: "Python Developer", color: "text-purple-400" },
    { title: "Fullstack Developer", color: "text-pink-400" }
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-8">
      
      {/* Profile Image */}
      <div className="flex justify-center mb-8">
        <img 
          src="/hiro.jpg" // Add your image path here
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md border-4 border-gray-600"
        />
      </div>
      
      <div className="text-center text-white">
        <h1 className="text-3xl md:text-5xl font-semibold mb-2 tracking-wide">Hello, I'm</h1>
        <h2 className="text-4xl md:text-6xl font-serif text-indigo-400 mb-4">Sanket Dhage</h2>
        
        {/* Rotating Title */}
        <p className={`text-lg md:text-2xl mb-6 font-light ${titles[currentTitleIndex].color}`}>
          {titles[currentTitleIndex].title}
        </p>
        
        {/* Social Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/sanket-dhage-028a78274/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-500 transition-transform duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/Sanket-Dhage/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.instagram.com/san_kya_3_9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition-transform duration-300 transform hover:scale-110"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.youtube.com/@sanketdhage2955"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-transform duration-300 transform hover:scale-110"
          >
            <FaYoutube size={28} />
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link
            to="/hire-me"
            className="bg-indigo-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-md shadow hover:bg-indigo-600 transition-all duration-300"
          >
            Hire Me
          </Link>
          <a
  href="/resume.pdf" // This points to the resume file in the public folder
  download="resume.pdf" // This suggests a name for the file upon download
  className="bg-gray-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-md shadow hover:bg-gray-800 transition-all duration-300"
>
  Download Resume
</a>

        </div>
      </div>
</div>

  );
};

export default Hero;
