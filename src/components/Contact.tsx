
import React, { useState } from 'react';
import { Mail, Github, Linkedin, User, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your next project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                I'm always excited to work on innovative projects and collaborate with 
                passionate individuals. Whether you have a project in mind or just want 
                to connect, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-blue-200">jainarch023@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-400 rounded-full flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-blue-200">Connect with me professionally</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-indigo-400 rounded-full flex items-center justify-center">
                  <Github size={20} />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-blue-200">Check out my code repositories</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold mb-4">Currently Available For:</h4>
              <ul className="space-y-2 text-blue-200">
                <li>• Full-stack development projects</li>
                <li>• Machine learning collaborations</li>
                <li>• Open source contributions</li>
                <li>• Mentorship opportunities</li>
                <li>• Speaking engagements</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-200">
            © 2025 Archi Jain. Crafted with passion and creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
