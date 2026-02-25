"use client";

import React, { useEffect } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { 
  IconNews, 
  IconStethoscope, 
  IconUsersGroup,
  IconWallet,
  IconScanEye,
  IconTool,
  IconCurrencyBitcoin,
  IconPizza,
  IconListCheck,
  IconCar // Added new icon for the vehicle insurance project
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Aos from "aos";
import "aos/dist/aos.css"; 

export function ExposureSection() {

    useEffect(() => {
      Aos.init({ duration: 1500, once: true });
    }, []);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Exposure & <span className="text-[#ea1d5d] text-[2rem] font-cursive" style={{ fontFamily: "'Great Vibes', cursive" }} >Projects</span>
        </h2>
        
       <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[22rem]">
          {exposureItems.map((item, i) => (
            <CardContainer 
              key={i} 
              containerClassName={cn(
                "inter-var w-full h-full",
                i === 0 || i === 6 || i === 7 ? "md:col-span-2" : "md:col-span-1"
              )}
              className="w-full h-full"
            >
              <CardBody className="relative group/card w-full h-full pointer-events-none">
                {/* 🚨 FIX: added pointer-events-auto to the children container */}
                <CardItem 
                  translateZ="50" 
                  className="w-full h-full pointer-events-auto" data-aos="fade-up"
                >
                  <BentoGridItem
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    link={item.link}
                    className="h-full w-full flex flex-col justify-between"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const Skeleton = ({ bgClass }: { bgClass: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl ${bgClass}`}></div>
);

const ImageHeader = ({ src }: { src: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <img 
      src={src} 
      alt="Project screenshot" 
      className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 hover:scale-105" 
    />
  </div>
);

// Added link: "#Link" to all items
const exposureItems = [
  {
    title: "News feed app - TrichyTimes",
    description: "Developed a dynamic and user-friendly news feed application accessible on both mobile and web platforms. Focused on delivering real-time updates.",
    header: <Skeleton bgClass="bg-gradient-to-br from-purple-900 to-black" />,
    icon: <IconNews className="h-4 w-4 text-purple-400" />,
    link: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1733580923/trichy_times_certificate_lpbdtd.jpg"
  },
  {
    title: "Expense Tracker",
    description: "Built a comprehensive mobile expense tracking application using React Native and Spring Boot to help users monitor their daily finances.",
    header: <Skeleton bgClass="bg-gradient-to-br from-emerald-900 to-black" />,
    icon: <IconWallet className="h-4 w-4 text-purple-400" />,
    link: "https://expo.dev/artifacts/eas/hncXfEK5e2BWR8Pyiy5rdt.apk"
  },
  {
    title: "Doctor Recommendation app",
    description: "Designed to match users with suitable healthcare professionals based on specific needs, leveraging advanced filtering.",
    header: <ImageHeader src="/image.png" />,
    icon: <IconStethoscope className="h-4 w-4 text-purple-400" />,
    link: "https://doc-rec-app.netlify.app"
  },
  {
    title: "SmartFix Technician - Customer App",
    description: "Engineered a dual-interface platform connecting customers with service technicians, streamlining repair requests and scheduling.",
    header: <ImageHeader src="/tech_work.png" />,
    icon: <IconTool className="h-4 w-4 text-purple-400" />,
    link: "https://github.com/SuryaaVijayD/Smart_Fix_Application.git"
  },
  {
    title: "DermLens",
    description: "Provides users with a platform to predict skin and hair-related issues using image classification techniques. Includes web and mobile versions.",
    header: <ImageHeader src="https://res.cloudinary.com/dvp9gkjpk/image/upload/v1711699028/Screenshot_2024-03-29_132445_eel1ta.png" />,
    icon: <IconScanEye className="h-4 w-4 text-purple-400" />,
    link: "https://github.com/SuryaaVijayD/dermatology.git"
  },
  {
    title: "Crypto Value Recommendation",
    description: "A recommendation system for cryptocurrency prices, predicting the future value of Bitcoin, Ethereum, or Tether based on a selected date.",
    header: <ImageHeader src="https://res.cloudinary.com/dvp9gkjpk/image/upload/v1711699046/Screenshot_159_aeoyla.png" />,
    icon: <IconCurrencyBitcoin className="h-4 w-4 text-purple-400" />,
    link: "https://github.com/SuryaaVijayD/CryptoCurrencyRecommendationApp.git"
  },
  {
    title: "App Development Workshop",
    description: "Conducted an engaging workshop for school students, focusing on practical skills, creativity, and foundational programming.",
    header: <Skeleton bgClass="bg-gradient-to-br from-pink-900 to-black" />,
    icon: <IconUsersGroup className="h-4 w-4 text-purple-400" />,
    link: "https://drive.google.com/file/d/1DSC-Vd7HtWrlhNk3t-IQD5kc7Ix7hCgh/view"
  },
  {
    title: "Vehicle Insurance Policy Management",
    description: "Fully developed in Spring Boot and Thymeleaf, featuring Spring Security integration and a scalable, microservice-like architecture.",
    header: <Skeleton bgClass="bg-gradient-to-br from-blue-900 to-black" />,
    icon: <IconCar className="h-4 w-4 text-purple-400" />,
    link: "https://vehicle-insurance-policy-management.onrender.com"
  },
  {
    title: "FoodMunch App",
    description: "The food delivery application offers dynamic responsiveness for a seamless user experience.",
    header: <ImageHeader src="https://res.cloudinary.com/dvp9gkjpk/image/upload/v1711699046/Screenshot_2024-03-29_131238_wveuyh.png" />,
    icon: <IconPizza className="h-4 w-4 text-purple-400" />,
    link: "https://foodeliverysv.ccbp.tech/"
  },
  {
    title: "TODO App",
    description: "The Todo application project offers a dynamic and responsive interface for managing tasks.",
    header: <ImageHeader src="https://res.cloudinary.com/dvp9gkjpk/image/upload/v1720507095/Screenshot_189_aa4z9k.png" />,
    icon: <IconListCheck className="h-4 w-4 text-purple-400" />,
    link: "https://todosv.ccbp.tech/"
  }
];
