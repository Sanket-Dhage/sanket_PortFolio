import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEarthAfrica } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-200">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-black">Projects</h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg border-4 border-black shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center">
            <img 
              src="ss.png" 
              alt="Project Image" 
              className="w-full h-48 object-cover rounded-md border-2 border-black mb-4"
            />
            <FontAwesomeIcon icon={faEarthAfrica} className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">Earth Around Sun</h3>
            <p className="mb-4">An interactive simulation showcasing the Earth’s orbit around the Sun, built with React and modern animation techniques.</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/Sanket-Dhage/baby" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Code
              </a>
              <a 
                href="https://baby-lovat-ten.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg border-4 border-black shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center">
            <img 
              src="sss.png" 
              alt="Project Image" 
              className="w-full h-48 object-cover rounded-md border-2 border-black mb-4"
            />
            <FontAwesomeIcon icon={faUser} className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl md:text-3xl text-black font-semibold mb-4">My Website</h3>
            <p className="mb-4">A portfolio website to showcase your work for jobs or internships.</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/Sanket-Dhage/My-Portfolio" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Code
              </a>
              <a 
                href="https://my-portfolio-phi-henna-65.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg border-4 border-black shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center">
            <img 
              src="s4.png" 
              alt="Project Image" 
              className="w-full h-48 object-cover rounded-md border-2 border-black mb-4"
            />
            <FontAwesomeIcon icon={faUser} className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl md:text-3xl text-black font-semibold mb-4">My Website</h3>
            <p className="mb-4">This project is a visually immersive website designed to showcase photography </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/Sanket-Dhage/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Code
              </a>
              <a 
                href="https://frontend-sanket-photography.netlify.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
          {/* Project 4 */}
          <div className="bg-white p-6 rounded-lg border-4 border-black shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center">
            <img 
              src="shop.png" 
              alt="Project Image" 
              className="w-full h-48 object-cover rounded-md border-2 border-black mb-4"
            />
            <FontAwesomeIcon icon={faUser} className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl md:text-3xl text-black font-semibold mb-4">My Website</h3>
            <p className="mb-4">A portfolio website to showcase your work for jobs or internships.</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/Sanket-Dhage/Furnicture-shop" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Code
              </a>
              <a 
                href="https://pricing-tnxj.vercel.app/?vercelToolbarCode=zBpTuyeDKUwV9jk" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
          {/* Project 5 */}
          <div className="bg-white p-6 rounded-lg border-4 border-black shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center">
            <img 
              src="watch.png" 
              alt="Project Image" 
              className="w-full h-48 object-cover rounded-md border-2 border-black mb-4"
            />
            <FontAwesomeIcon icon={faUser} className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl md:text-3xl text-black font-semibold mb-4">My Website</h3>
            <p className="mb-4">A portfolio website to showcase your work for jobs or internships.</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/Sanket-Dhage/Watch-shop" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Code
              </a>
              <a 
                href="https://watch-shop-alpha.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Projects;
