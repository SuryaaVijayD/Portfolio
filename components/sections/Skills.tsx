"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  IconBrandReact, 
  IconBrandPython, 
  IconTerminal2, 
  IconBrandAws,
  IconDeviceMobile,
  IconCoffee,
  IconServer,
  IconRobot
} from "@tabler/icons-react";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Technical <span className="text-[#ea1d5d] text-[2rem] font-cursive" style={{ fontFamily: "'Great Vibes', cursive" }} >Proficiency</span>
        </h2>
        
        {/* The grid is 1 column on mobile, 2 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {skillsData.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              percentage={skill.percentage} 
              icon={skill.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual Skill Bar Component
const SkillBar = ({ 
  name, 
  percentage, 
  icon 
}: { 
  name: string; 
  percentage: number; 
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-4">
      {/* Icon Container */}
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl shadow-sm">
        {icon}
      </div>
      
      {/* Progress Bar Container */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2 text-sm font-semibold text-white">
          <span className="tracking-wide">{name}</span>
          <span className="text-purple-400">{percentage}%</span>
        </div>
        
        {/* Background Track */}
        <div className="w-full h-2.5 bg-neutral-800 rounded-full overflow-hidden">
          {/* Animated Fill */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }} // Only animates the first time it comes into view
            className="h-full bg-purple-600 rounded-full relative"
          >
            {/* Optional: Adds a subtle glowing effect to the end of the progress bar */}
            <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-sm rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Data array customized to your full-stack engineering profile
const skillsData = [
  {
    name: "Java & Spring Boot",
    percentage: 90,
    icon: <IconCoffee className="w-6 h-6 text-orange-400" />,
  },
  {
    name: "React & Next.js (Typescript)",
    percentage: 85,
    icon: <IconBrandReact className="w-6 h-6 text-sky-400" />,
  },
  {
    name: "Python",
    percentage: 85,
    icon: <IconBrandPython className="w-6 h-6 text-yellow-400" />,
  },
  {
    name: "React Native",
    percentage: 80,
    icon: <IconDeviceMobile className="w-6 h-6 text-blue-400" />,
  },
  {
    name: "Shell Scripting (Bash/.ksh)",
    percentage: 80,
    icon: <IconTerminal2 className="w-6 h-6 text-green-400" />,
  },
  {
    name: "AWS & ECS Deployment",
    percentage: 45,
    icon: <IconBrandAws className="w-6 h-6 text-orange-500" />,
  },
  {
    name: "Node.js & Express",
    percentage: 75,
    icon: <IconServer className="w-6 h-6 text-emerald-500" />,
  },
  {
    name: "Machine Learning & Gen AI",
    percentage: 70,
    icon: <IconRobot className="w-6 h-6 text-purple-500" />,
  },
];