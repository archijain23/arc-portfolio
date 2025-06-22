
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Archi Jain
              </h1>
              <p className="text-sm text-gray-600">Full-Stack Developer</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors">Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-purple-600 transition-colors">Experience</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="mailto:jainarch023@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
