import Navbar from "@/components/Home/Navbar";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Work from "@/components/Home/Work";
import Projects from "@/components/Home/Projects";
import Footer from "@/components/Home/Footer";

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