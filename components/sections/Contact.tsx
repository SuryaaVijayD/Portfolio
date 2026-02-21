"use client";

import React, { useState } from "react";
import { 
  IconMail, 
  IconMapPin, 
  IconBrandLinkedin, 
  IconBrandGithub,
  IconSend
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace this with your actual Web3Forms Access Key
          access_key: "00ae62b8-547f-4f52-ae78-f45b18ba3aa7", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Optional: You can set a subject line for the emails you receive
          subject: "New Contact Form Submission from Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully! I will get back to you soon.");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-black/[0.96] py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s <span className="text-[#ea1d5d] text-[2rem] font-cursive" style={{ fontFamily: "'Great Vibes', cursive" }} >Connect</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Contact Details */}
          <div className="flex flex-col justify-center space-y-8 lg:pr-10">
            <ContactInfoItem 
              icon={<IconMail className="text-purple-400 w-6 h-6" />}
              title="Email"
              content="dhakshinamooorthyvijay@gmail.com"
              link="mailto:dhakshinamooorthyvijay@gmail.com"
            />
            <ContactInfoItem 
              icon={<IconMapPin className="text-purple-400 w-6 h-6" />}
              title="Location"
              content="Tiruchirappalli, Tamil Nadu, India"
            />
            <ContactInfoItem 
              icon={<IconBrandLinkedin className="text-purple-400 w-6 h-6" />}
              title="LinkedIn"
              content="Connect with me"
              link="https://www.linkedin.com/in/suryaa-d/"
            />
            <ContactInfoItem 
              icon={<IconBrandGithub className="text-purple-400 w-6 h-6" />}
              title="GitHub"
              content="Explore my repositories"
              link="https://github.com/SuryaaVijayD" 
            />
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-neutral-950/50 border border-neutral-800 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-300">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-neutral-900 border border-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-neutral-900 border border-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                  placeholder="Enter Email Address"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={4}
                  className="bg-neutral-900 border border-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50"
                  placeholder="How can I help you?"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="group w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white font-semibold rounded-lg transition-all duration-200"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && (
                  <IconSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable micro-component for the contact details
const ContactInfoItem = ({ 
  icon, 
  title, 
  content, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  link?: string;
}) => {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="flex-shrink-0 p-3 bg-neutral-900 border border-neutral-800 rounded-xl group-hover:border-purple-500/50 group-hover:bg-neutral-800 transition-all duration-300">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-sm font-medium text-neutral-400">{title}</h3>
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg font-semibold text-white hover:text-purple-400 transition-colors duration-200"
          >
            {content}
          </a>
        ) : (
          <p className="text-lg font-semibold text-white">{content}</p>
        )}
      </div>
    </div>
  );
};