"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; 
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { 
    name: "Other", 
    href: "#",
    subLinks: [
      { 
        name: "Resume", 
        href: "https://drive.google.com/file/d/14sKlz2Z8uW8GjI7EdDh156n_9n8Zr6lO/view?usp=sharing",
        external: true // Flag to open in a new tab
      },
      { name: "Feedback", href: "#contact" },
    ]
  },
];

export function Navbar() {  
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="fixed top-6 inset-x-0 w-full max-w-4xl mx-auto px-4 z-40 hidden md:block"
      >
        <nav className="flex items-center justify-between px-5 py-3 bg-black/10 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
          <Link href="/" className="text-white font-semibold text-lg tracking-wide" style={{ fontFamily: "'Great Vibes', cursive" }}>
            SD
          </Link>

          <div className="flex items-center p-1 bg-white/5 border border-white/5 rounded-full">
            {navLinks.map((link) => {
              const isActive = active === link.name;
              
              if (link.subLinks) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                    onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setActive(link.name)}
                      className={`relative flex items-center gap-1 px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                        isActive ? "text-black" : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="desktop-active-pill"
                          className="absolute inset-0 bg-white rounded-full"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                      <ChevronDown className={`relative z-10 w-4 h-4 transition-transform duration-200 ${isDesktopDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {isDesktopDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-[#141416]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2"
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              // Add target="_blank" if it's an external link
                              target={subLink.external ? "_blank" : undefined}
                              rel={subLink.external ? "noopener noreferrer" : undefined}
                              className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                              onClick={() => {
                                setIsDesktopDropdownOpen(false);
                                // Only set it as active if it's an internal link
                                if (!subLink.external) {
                                  setActive(link.name);
                                }
                              }}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive ? "text-black" : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="desktop-active-pill"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <Link
            href="#contact"
            className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </motion.header>

      {/* Mobile Navigation Trigger */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="fixed top-4 inset-x-0 w-full px-4 z-40 md:hidden"
      >
        <nav className="flex items-center justify-between px-5 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-xl">
          <Link href="/" className="text-white font-semibold text-lg tracking-wide">
            SD
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-4 inset-x-4 z-50 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-5 flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-xl tracking-wide">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-transparent border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <hr className="border-white/10 mb-5" />

            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = active === link.name;

                if (link.subLinks) {
                  return (
                    <div key={link.name} className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          setActive(link.name);
                          setIsMobileDropdownOpen(!isMobileDropdownOpen);
                        }}
                        className={`flex items-center justify-between px-5 py-3 rounded-full text-base font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-white text-black"
                            : "bg-transparent border border-white/10 text-white hover:bg-white/10"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? "text-gray-500" : "text-gray-400"} ${isMobileDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isMobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-2 pl-4 ml-4 border-l border-white/10"
                          >
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                // Add target="_blank" if it's an external link
                                target={subLink.external ? "_blank" : undefined}
                                rel={subLink.external ? "noopener noreferrer" : undefined}
                                onClick={() => {
                                  if (!subLink.external) {
                                    setTimeout(() => setIsMobileMenuOpen(false), 300);
                                  }
                                }}
                                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActive(link.name);
                      setTimeout(() => setIsMobileMenuOpen(false), 300);
                    }}
                    className={`flex items-center justify-between px-5 py-3 rounded-full text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white text-black"
                        : "bg-transparent border border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? "text-gray-500" : "text-gray-400"}`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 flex justify-end">
              <Link
                href="#contact"
                className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}