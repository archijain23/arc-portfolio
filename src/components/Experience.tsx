
import React from 'react';
import { Calendar, Award, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Nullclass Technology Private Limited",
      role: "Software Development Intern",
      duration: "July 2024 - August 2024",
      type: "Internship",
      description: "Implemented key features like login security, device tracking, payment Gateway (Razorpay), multilingual support and enhanced user interface of the internship portal.",
      skills: ["Fullstack Development", "Payment Integration", "Security Implementation"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      company: "AICTE Virtual Internship",
      role: "Network Security Specialist",
      duration: "May 2024 - July 2024",
      type: "Virtual Internship",
      description: "Designed and implemented a personal home network using Cisco Packet Tracer, demonstrating foundational knowledge of network architecture and configuration.",
      skills: ["Cyber Security", "Cloud Security", "Cisco Packet Tracer"],
      color: "from-cyan-500 to-blue-400"
    },
    {
      company: "AICTE Virtual Internship", 
      role: "Network Security Analyst",
      duration: "May 2023 - July 2023",
      type: "Virtual Internship",
      description: "Gained comprehensive understanding of network architecture and configuration through hands-on training with Cisco Packet Tracer and cybersecurity fundamentals.",
      skills: ["Network Architecture", "Cybersecurity Fundamentals", "System Configuration"],
      color: "from-blue-600 to-indigo-500"
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
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Experience & Achievements
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional journey and recognition in technology and leadership
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline Experience */}
          <div className="relative">
            <div className="flex items-center mb-8">
              <Briefcase className="text-blue-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-white">Professional Timeline</h3>
            </div>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Main Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg ring-4 ring-slate-800`}>
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                      {/* Pulse Animation */}
                      <div className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-20`}></div>
                    </div>
                    
                    {/* Timeline Content */}
                    <div className="ml-8 flex-1">
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                            <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                          </div>
                          <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium border border-blue-700">
                            {exp.type}
                          </span>
                        </div>
                        
                        <div className="flex items-center mb-4 text-slate-400">
                          <Calendar size={16} />
                          <span className="ml-2 font-medium">{exp.duration}</span>
                        </div>
                        
                        <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 text-blue-300 rounded-full text-sm font-medium border border-blue-700/50 hover:border-blue-500/50 transition-colors"
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
          </div>
          
          {/* Achievements Timeline */}
          <div className="relative">
            <div className="flex items-center mb-8">
              <Award className="text-cyan-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
            </div>
            
            {/* Achievements Timeline */}
            <div className="relative">
              {/* Achievement Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-600"></div>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Achievement Node */}
                    <div className="relative z-10">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg ring-2 ring-slate-800">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Achievement Content */}
                    <div className="ml-6 flex-1">
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl">
                        <p className="text-slate-300 leading-relaxed font-medium">{achievement}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Leadership Section */}
            <div className="mt-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 shadow-xl">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                Leadership & Activities
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Club Lead - The Thespians Club (College Drama Club)
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Team Lead - Smart India Hackathon (SIH)
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  World Tourism Day Representative (Egypt-themed exhibit)
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Environmental Conservation Volunteer
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Honey Bee Network Member
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
