"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ExperienceTimeline() {
  const data = [
    {
      title: "July 2025 - Present",
      content: (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-sans">
            Software Engineer <span className="text-blue-700">@CTS</span>
          </h3>
          <p className="text-neutral-400 text-sm md:text-base mb-4 font-sans">
            Bengaluru, India (Hybrid)
          </p>
          <ul className="list-disc list-outside space-y-2 text-neutral-300 text-sm md:text-base ml-4 font-sans">
            <li>Engineered automation scripts using Python and Shell scripting to optimize system monitoring and application performance.</li>
            <li>Manage backend service stability and application health, maintaining high availability across production environments.</li>
            <li>Developed internal utility tools to automate manual data workflows, significantly reducing operational cycle times.</li>
            <li>Currently training in AWS to integrate cloud-native automation and infrastructure monitoring solutions.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "March 2025 - June 2025",
      content: (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-sans">
            Software Developer Intern <span className="text-blue-700">@CTS</span>
          </h3>
          <p className="text-neutral-400 text-sm md:text-base mb-4 font-sans">
            Chennai, India (Office)
          </p>
          <ul className="list-disc list-outside space-y-2 text-neutral-300 text-sm md:text-base ml-4 font-sans">
            <li>Architected a Vehicle Insurance Policy Management system using Spring Boot, automating the policy issuance lifecycle.</li>
            <li>Designed and tested RESTful API endpoints to facilitate secure communication between client-side and MySQL database.</li>
            <li>Optimized SQL query performance, improving data retrieval speeds for policy documentation.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div id="experience" className="w-full py-20">
      <Timeline data={data} />
    </div>
  );
}