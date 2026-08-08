import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import CursorFollower from "@/components/ui/CursorFollower";
import MobileStickyBar from "@/components/ui/MobileStickyBar";

export default function Home() {
  return (
    <main className="bg-white text-ink overflow-x-hidden">
      <LoadingScreen />
      <ScrollProgressBar />
      <CursorFollower />
      <MobileStickyBar />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Achievements />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
