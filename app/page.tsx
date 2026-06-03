import Navbar from "@/app/components/ui/Navbar";
import Hero from "@/app/components/sections/Hero";
import Ecosystem from "@/app/components/sections/Ecosystem";
import PrivateTrip from "@/app/components/sections/PrivateTrip";
import TripSeries from "@/app/components/sections/TripSeries";
import About from "@/app/components/sections/About";
import FeaturedProducts from "@/app/components/sections/FeaturedProducts";
import Footer from "@/app/components/ui/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ecosystem />
      <PrivateTrip />
      <TripSeries />
      <About />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
