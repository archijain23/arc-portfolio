
import React from 'react';
import { Calendar, Link as LinkIcon } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Nullclass Technology Private Limited",
      role: "Software Development Intern",
      duration: "July 2024 - August 2024",
      type: "Internship",
      description: "Implemented key features like login security, device tracking, payment Gateway (Razorpay), multilingual support and enhanced user interface of the internship portal.",
      skills: ["Fullstack Development", "Payment Integration", "Security Implementation"],
      color: "from-blue-600 to-blue-400"
    },
    {
      company: "AICTE Virtual Internship",
      role: "Network Security Specialist",
      duration: "May 2024 - July 2024",
      type: "Virtual Internship",
      description: "Designed and implemented a personal home network using Cisco Packet Tracer, demonstrating foundational knowledge of network architecture and configuration.",
      skills: ["Cyber Security", "Cloud Security", "Cisco Packet Tracer"],
      color: "from-indigo-600 to-blue-400"
    },
    {
      company: "AICTE Virtual Internship", 
      role: "Network Security Analyst",
      duration: "May 2023 - July 2023",
      type: "Virtual Internship",
      description: "Gained comprehensive understanding of network architecture and configuration through hands-on training with Cisco Packet Tracer and cybersecurity fundamentals.",
      skills: ["Network Architecture", "Cybersecurity Fundamentals", "System Configuration"],
      color: "from-slate-600 to-indigo-400"
    }
  ];

  const achievements = [
    "Patent Holder: Marine-Minds Application (SW-20249/2025)",
    "Outstanding Achievements Award at Lakshya Award Ceremony",
    "First Position in International Women's Day Competition 2024",
    "Winner in Basketball Tournament at Gyanotsav-2023",
    "Ms. SJC Award for the Year 2021-2022"
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Experience & Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional journey and recognition in technology and leadership
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-4 top-16 w-0.5 h-24 bg-gradient-to-b from-blue-300 to-transparent"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0 mt-2`}></div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{exp.role}</h4>
                          <p className="text-blue-600 font-semibold">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center mb-4 text-gray-600">
                        <Calendar size={16} />
                        <span className="ml-2">{exp.duration}</span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-gray-700 leading-relaxed">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Leadership & Activities</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Club Lead - The Thespians Club (College Drama Club)</li>
                <li>• Team Lead - Smart India Hackathon (SIH)</li>
                <li>• World Tourism Day Representative (Egypt-themed exhibit)</li>
                <li>• Environmental Conservation Volunteer</li>
                <li>• Honey Bee Network Member</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
