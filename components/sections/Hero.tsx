"use client";

import React, { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { ChevronDown } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Aos from "aos";
import "aos/dist/aos.css"; 

export function Hero() {
    useEffect(() => {
      Aos.init({ duration: 1500, once: true });
    }, []);
  
  return (
    <div id="home" className="min-h-[100dvh] w-full sm:px-14 flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      
      <div className="p-4 sm:p-6 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center" data-aos="fade-up">
        
        {/* Top Label */}
        <p className="text-[10px] md:text-xs tracking-[0.3em] text-neutral-300 uppercase mb-2 md:mb-6 font-sans">
          Who am I?
        </p>

        {/* Main Heading */}
        <h1 className="font-poppins text-2xl sm:text-6xl md:text-5xl font-bold text-center text-white tracking-tight leading-snug md:leading-tight">
          Changing Imagination to Seamless
          
          {/* Cursive Gradient Text */}
          <span 
            className="block -mt-2 md:-mt-4 py-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a5b] to-[#ea1d5d] text-5xl sm:text-8xl font-normal tracking-normal leading-none"
            style={{ fontFamily: "'Great Vibes', cursive" }} 
          >
            UserExperience
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans mt-0 md:mt-2 font-normal text-sm sm:text-base text-neutral-200 text-center mx-auto">
          <span className="italic text-white">Suryaa D</span>, Software Engineer @Cognizant
        </p>

        {/* Explore Button with Hover Border Gradient */}
        <div className="mt-8 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-md"
            as="button"
            className="bg-black text-white text-sm px-8 py-2.5 flex items-center gap-2"
          >
            <span>Explore</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </HoverBorderGradient>
        </div>

      </div>
    </div>
  );
}