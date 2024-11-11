import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission and display success message
    setTimeout(() => {
      setFormStatus('Message sent successfully!');
      // Clear form data after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div id="contact" className="py-20 bg-gray-500 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
      <p className="max-w-xl mx-auto text-lg mb-6">
        If you’re interested in collaborating, feel free to reach out through the form below.
      </p>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name" 
          className="w-full p-3 mb-4 rounded-lg"
          required
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email" 
          className="w-full p-3 mb-4 rounded-lg"
          required
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message" 
          className="w-full p-3 mb-4 rounded-lg"
          required
        ></textarea>
        <button 
          type="submit" 
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>

      {/* Display success message */}
      {formStatus && (
        <p className="text-green-500 mt-4 font-semibold">{formStatus}</p>
      )}
    </div>
  );
};

export default Contact;
