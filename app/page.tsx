export const dynamic = "force-dynamic";

import Navbar from "@/app/components/ui/Navbar";
import Hero from "@/app/components/sections/Hero";
import Services from "@/app/components/sections/Services";
import Destinations from "@/app/components/sections/Destinations";
import Schedule from "@/app/components/sections/Schedule";
import About from "@/app/components/sections/About";
import Contact from "@/app/components/sections/Contact";
import Footer from "@/app/components/ui/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <Schedule />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
