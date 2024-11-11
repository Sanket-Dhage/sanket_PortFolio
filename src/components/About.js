import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-16 bg-gray-800 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">About Me</h2>
      
      {/* Developer Roles Section */}
      <div className="flex flex-wrap justify-center gap-6 items-stretch">
        
        {/* Frontend Developer */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border-2 border-black max-w-xs w-full sm:w-80 md:w-1/3 lg:w-1/4">
          <h3 className="text-xl font-bold text-blue-500 mb-4">Frontend Developer</h3>
          <p className="text-sm font-bold text-gray-600 mb-4">
            Specializing in creating interactive and visually appealing UIs with HTML, CSS, JavaScript, and React.
          </p>
          <ul className="list-disc text-left text-gray-600 pl-4">
            <li>Proficient in HTML, CSS, and JavaScript</li>
            <li>Experienced with React.js and responsive design</li>
            <li>Passionate about UI/UX design principles</li>
          </ul>
        </div>

        {/* Backend Developer */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border-2 border-black max-w-xs w-full sm:w-80 md:w-1/3 lg:w-1/4">
          <h3 className="text-xl font-bold text-green-500 mb-4">Backend Developer</h3>
          <p className="text-sm font-bold text-gray-600 mb-4">
            Building server-side logic and database structures with Node.js, Express, and databases.
          </p>
          <ul className="list-disc text-left text-gray-600 pl-4">
            <li>Experience with Node.js and Express</li>
            <li>Database design with MongoDB, PostgreSQL, and MySQL</li>
            <li>API development and integration</li>
          </ul>
        </div>

        {/* Flutter Developer */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border-2 border-black max-w-xs w-full sm:w-80 md:w-1/3 lg:w-1/4">
          <h3 className="text-xl font-bold text-purple-500 mb-4">App Developer</h3>
          <p className="text-sm font-bold text-gray-600 mb-4">
          Experienced in designing and developing high-performance mobile applications,
          </p>
          <ul className="list-disc text-left text-gray-600 pl-4">
            <li>Proficient in React Native, Flutter, and Swift for building native</li>
            <li>Experience in building responsive mobile apps</li>
            <li>Strong understanding of UI/UX principles,</li>
          </ul>
        </div>

        {/* Android Developer */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border-2 border-black max-w-xs w-full sm:w-80 md:w-1/3 lg:w-1/4">
          <h3 className="text-xl font-bold text-red-500 mb-4">Python Developer</h3>
          <p className="text-sm font-bold text-gray-600 mb-4">
         
          Passionate about crafting clean, efficient, and scalable Python code to drive impactful solutions.
          </p>
          <ul className="list-disc text-left text-gray-600 pl-4">
            <li>Expertise in Python frameworks like Django and Flask</li>
            <li>Skilled in working with APIs, databases (SQL, NoSQL)</li>
            <li>Proficient in data analysis, machine learning libraries</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
