import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TechMarquee from "@/components/tech-marquee";
import About from "@/components/about";
import Experience from "@/components/experience";
import Certifications from "@/components/certifications";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05050a] text-white">
      <div className="pointer-events-none fixed inset-0 bg-grid" aria-hidden />
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Education />
      <Footer />
    </main>
  );
}
