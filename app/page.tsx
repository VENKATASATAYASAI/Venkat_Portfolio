import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TechMarquee from "@/components/tech-marquee";
import Projects from "@/components/projects";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white relative">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-neutral-950/50 backdrop-blur-3xl">
        <TechMarquee />
        <Projects />
        <About />
        <Footer />
      </div>
    </main>
  );
}
