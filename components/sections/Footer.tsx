import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-20 pb-30 overflow-hidden border-neutral-900 bg-black">
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mb-2">
        
        {/* Headings */}
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          <span className="text-white block mb-2">Wanna Make</span>
          <span className="block">
            {/* The exact gradient matching your image */}
            <span style={{ fontFamily: "'Great Vibes', cursive" }} className="bg-gradient-to-r from-orange-400 via-rose-500 to-pink-600 bg-clip-text text-transparent" >
              Conversation
            </span>{" "}
            <span className="text-white">To Me?</span>
          </span>
        </h2>
        
        {/* Subtext */}
        <p className="text-gray-600 text-lg md:text-lg mb-10 max-w-2xl font-medium">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goal
        </p>

        <a href="mailto:dhakshinamooorthyvijay@gmail.com">
          <HoverBorderGradient
            containerClassName="cursor-pointer"
            className="bg-black hover:bg-neutral-950 text-white flex items-center space-x-3 px-8 py-3 transition-colors duration-200"
          >
            <span className="text-lg font-semibold">Contact Me</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform duration-200"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </HoverBorderGradient>
        </a>
      </div>

      {/* Bottom Watermark Text */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden h-40 lg:h-64 items-end">
        <span className="text-[20vw] lg:text-[15vw] leading-none font-bold text-neutral-900/50 -mb-4 lg:-mb-10 tracking-tighter">
          Suryaa
        </span>
      </div>
      
    </footer>
  );
}