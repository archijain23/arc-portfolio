
import React, { useEffect, useState } from 'react';
import { Code, LinkIcon, User } from 'lucide-react';

const Skills = () => {
  const [animatedBars, setAnimatedBars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedBars(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 88 },
        { name: "C#", level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: <LinkIcon className="text-indigo-600" size={24} />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 78 }
      ]
    },
    {
      title: "Other Technologies",
      icon: <User className="text-slate-600" size={24} />,
      skills: [
        { name: "MySQL", level: 82 },
        { name: "Git/GitHub", level: 88 },
        { name: "Unity", level: 70 },
        { name: "Cloud (AWS)", level: 75 },
        { name: "Machine Learning", level: 68 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-600">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-white ml-3">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animatedBars ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">Certifications & Learning</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-600">
                <p className="font-semibold text-blue-400">CCNA</p>
                <p className="text-sm text-gray-400">Cisco Networking</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-600">
                <p className="font-semibold text-blue-300">Java Fundamentals</p>
                <p className="text-sm text-gray-400">Oracle Academy</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-600">
                <p className="font-semibold text-blue-200">Cloud Security</p>
                <p className="text-sm text-gray-400">Cisco Academy</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-600">
                <p className="font-semibold text-blue-400">Full Stack</p>
                <p className="text-sm text-gray-400">Apna College</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
