import { Hero } from "../components/sections/Hero";
// You will import the rest of your sections here as you build them
import { About } from "../components/sections/About";
import { ExperienceTimeline } from "@/components/sections/Experience";
import { ExposureSection } from "@/components/sections/Exposure";
import { SkillsSection } from "@/components/sections/Skills";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";


export default function Home() {
  return (
    <main className="flex flex-col w-full relative bg-black/[0.96]">
      <Hero />
      <About />
      <ExperienceTimeline />
      <ExposureSection />
      <SkillsSection />
      <ContactSection />
      {/* <Experience /> */}
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Contact /> */}

      <Footer />
    </main>
  );
}