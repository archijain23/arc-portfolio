
import React, { useState } from 'react';
import { Github, Link as LinkIcon } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "GameON - Sports Tournament Management",
      description: "A comprehensive web-based platform connecting players, academies, and organizers with real-time match tracking and career analytics.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      status: "Ongoing",
      features: ["Real-time notifications", "Tournament automation", "Player recruitment", "Career analytics"]
    },
    {
      id: 2,
      title: "Marine Minds - Ocean Conservation",
      description: "An innovative platform promoting marine education through immersive 3D environments and gamified learning experiences.",
      tech: ["C#", "Unity", "Game Engine", "3D Modeling"],
      status: "Completed",
      features: ["3D ocean exploration", "Interactive learning", "Conservation tracking", "Marine ecosystem simulation"]
    },
    {
      id: 3,
      title: "Wanderlust - Travel Platform",
      description: "Airbnb-inspired platform with advanced search, map integration, and secure authentication for unique travel experiences.",
      tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"],
      status: "Completed",
      features: ["Interactive maps", "Secure authentication", "Advanced search", "Booking system"]
    },
    {
      id: 4,
      title: "Simon Says Game",
      description: "A web-based memory challenge game with responsive design and engaging visual effects for enhanced user experience.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      status: "Completed",
      features: ["Responsive design", "Visual effects", "Score tracking", "Progressive difficulty"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative solutions that showcase my passion for technology and problem-solving
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredProject === project.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Ongoing' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  <Github size={16} />
                  <span>Code</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
                  <LinkIcon size={16} />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
