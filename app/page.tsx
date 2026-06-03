import Navbar from "@/app/components/ui/Navbar";
import Hero from "@/app/components/sections/Hero";
import Ecosystem from "@/app/components/sections/Ecosystem";
import About from "@/app/components/sections/About";
import FeaturedProducts from "@/app/components/sections/FeaturedProducts";
import Footer from "@/app/components/ui/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ecosystem />
      <About />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
