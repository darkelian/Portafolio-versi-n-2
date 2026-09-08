import { SkyBackground } from "@/components/SkyBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Observatory } from "@/components/Observatory";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SkyBackground />
      <Navbar />
      <main className="relative z-10 w-full px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <Hero />
          <Projects />
          <About />
          <Experience />
          <Skills />
          <Observatory />
          <Contact />
        </div>
      </main>
    </>
  );
}
