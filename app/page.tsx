import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2E7C9]">
      <Navbar />
      <div className="pt-24">
        <Hero />
        <About />
      </div>
    </div>
  );
}
