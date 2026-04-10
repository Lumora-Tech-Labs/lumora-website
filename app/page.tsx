import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#F2E7C9]">
      <Navbar />
      <Hero />
      <div className="space-y-12">
        <About />
        <Work />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}