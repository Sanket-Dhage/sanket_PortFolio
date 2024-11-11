import React from 'react';

const HireMe = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gray-100 p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10">Hire Me</h1>

      {/* Contact Section */}
      <div className="flex flex-col items-start bg-white text-gray-800 shadow-lg rounded-lg p-6 mb-8 w-full md:w-2/3 lg:w-1/2 border border-blue-700 transition transform hover:scale-105 hover:bg-gray-50 hover:shadow-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h2>
        <div className="space-y-3">
          <p className="text-lg"><span className="font-semibold">Name:</span> Sanket Dhage</p>
          <p className="text-lg"><span className="font-semibold">Address:</span> Pune, Maharashtra, India, 411026</p>
          <p className="text-lg"><span className="font-semibold">Contact:</span> +919022093293</p>
          <p className="text-lg"><span className="font-semibold">Email:</span> snktdhg@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/Sanket-Dhage" className="text-blue-600 hover:text-blue-800 font-semibold">GitHub</a>
            <a href="https://www.linkedin.com/in/sanket-dhage-028a78274/" className="text-blue-600 hover:text-blue-800 font-semibold">LinkedIn</a>
            <a href="https://my-portfolio-phi-henna-65.vercel.app/" className="text-blue-600 hover:text-blue-800 font-semibold">My Portfolio</a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col items-start bg-gray-50 text-gray-800 shadow-lg rounded-lg p-6 mb-8 w-full md:w-2/3 lg:w-1/2 border border-blue-700 transition transform hover:scale-105 hover:bg-gray-100 hover:shadow-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Skills</h2>
        <div className="space-y-3">
          <p><span className="font-semibold">Programming Languages:</span> JavaScript / TypeScript</p>
          <p><span className="font-semibold">Frontend Technologies:</span> HTML5, CSS3, React.js/Next.js, React Native, Bootstrap/Tailwind</p>
          <p><span className="font-semibold">Backend Technologies:</span> Node.js, Express.js, Python, MongoDB</p>
          <p><span className="font-semibold">Developer Tools:</span> Redux, GitHub, Canva, Insomnia/Postman, Expo, Figma, visual studio code</p>
        </div>
      </div>

      {/* Education Section */}
      <div className="flex flex-col items-start bg-gray-50  text-gray-800 shadow-lg rounded-lg p-6 mb-8 w-full md:w-2/3 lg:w-1/2 border border-blue-700 transition transform hover:scale-105  hover:shadow-2xl">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="space-y-3">
          <p><span className="font-semibold">10th:</span> Saraswati Vidyalaya and Junior College of Science (62.00%)</p>
          <p><span className="font-semibold">12th:</span> Saraswati Vidyalaya and Junior College of Science (68.00%)</p>
          <p><span className="font-semibold">BCA :</span> New Art, Commerce & Science College Parner (8.78 SGPA)</p>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
