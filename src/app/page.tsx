import Footer from "@/components/common/Footer";
import CTASection from "@/components/home/CTASection";
import FiturUnggulanSection from "@/components/home/FiturUnggulanSection";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/common/Navbar";
import AboutWhyUsSection from "@/components/about-us/AboutWhyUsSection";


export default function Home() {
  return <div className="font-sans min-h-screen flex flex-col gap-0"> 
  <Navbar />
  <HeroSection /> 
  <FiturUnggulanSection />
  
  <CTASection /> 
  <Footer />
  </div>
  
}

