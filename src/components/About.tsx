
import React from 'react';
import { BookOpen, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A passionate developer with a vision to create meaningful technology solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm currently pursuing my B.Tech in Computer Science and Engineering at 
              Gyan Ganga Institute of Technology and Sciences with a CGPA of 8.18. 
              My journey in technology has been driven by a passion for innovation and 
              problem-solving.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in full-stack development with expertise in React, Node.js, 
              Python, and cloud technologies. My notable project "Marine Minds" demonstrates 
              my commitment to using technology for environmental conservation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With multiple internships at AICTE and hands-on experience in cybersecurity 
              and network engineering, I bring a comprehensive understanding of modern 
              technology stacks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600">
              <BookOpen className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-white">Education</h3>
              <p className="text-gray-300">B.Tech in CS & Engineering</p>
              <p className="text-sm text-gray-400">CGPA: 8.18/10</p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600">
              <Award className="text-blue-300 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-white">Achievements</h3>
              <p className="text-gray-300">Multiple Hackathon Finalist</p>
              <p className="text-sm text-gray-400">Patent Holder & Award Winner</p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600">
              <Users className="text-blue-200 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-white">Leadership</h3>
              <p className="text-gray-300">Team Lead & Club Leader</p>
              <p className="text-sm text-gray-400">Mentor & Community Builder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
