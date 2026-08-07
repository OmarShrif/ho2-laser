import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
      <Footer />

      <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">

        <h1 className="text-7xl font-extrabold text-yellow-400">
          HO2 Laser
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          Precision Laser Cutting & CNC Woodworking
        </p>

      </main>
    </>
  );
}