import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TechMarquee from "@/components/tech-marquee";
import About from "@/components/about";
import Capabilities from "@/components/capabilities";
import BackToTop from "@/components/back-to-top";
import Experience from "@/components/experience";
import Certifications from "@/components/certifications";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05050a] text-white">
      <div className="pointer-events-none fixed inset-0 bg-grid" aria-hidden />
      <div className="noise pointer-events-none fixed inset-0 z-[70]" aria-hidden />
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Capabilities />
      <Experience />
      <Certifications />
      <Projects />
      <Education />
      <Footer />
      <BackToTop />
    </main>
  );
}
