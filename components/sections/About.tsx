"use client";

import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Aos from "aos";
import "aos/dist/aos.css"; 

const aboutText = `I am a software engineer with a passion for building robust backend systems and seamless web applications. I design purposeful, scalable solutions that blend clean architecture with intuitive functionality, creating memorable digital experiences that align with both technical needs and user expectations.`;

export function About() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <section id="about" className="bg-black/[0.96] w-full py-20 px-4 sm:px-6 lg:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start">
        
        {/* Left Column: Heading & Buttons */}
        <div className="flex flex-col items-start" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-white tracking-tight mb-8">
            About <span className="text-[#ea1d5d]">Me</span>
          </h2>
          
          <div className="flex items-center gap-2">
            <button className="bg-gray-100 text-black font-medium text-sm px-6 py-3 rounded-sm transition-colors">
              Let's Contact
            </button>
            <button className="bg-gray-100 text-black p-3 rounded-sm transition-colors flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Animated Text */}
        <div className="flex flex-col justify-start pt-2">
          <TextGenerateEffect 
            words={aboutText} 
            className="text-base md:text-lg lg:text-xl font-sans text-neutral-300 font-normal leading-relaxed"
          />
        </div>

      </div>
    </section>
  );
}