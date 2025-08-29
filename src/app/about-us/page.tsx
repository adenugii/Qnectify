import AboutHeroSection from "@/components/about-us/AboutHeroSection";
import AboutVisiMisiSection from "@/components/about-us/AboutVisiMisiSection";
import AboutJourneySection from "@/components/about-us/AboutJourneySection";
import AboutWhyUsSection from "@/components/about-us/AboutWhyUsSection";
import AboutTeamSection from "@/components/about-us/AboutTeamSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function AboutUsPage() {
  return (
    <div className="bg-[#f7fafd] min-h-screen flex flex-col ">
      <Navbar />
      <AboutHeroSection />
      <AboutVisiMisiSection />
      <AboutWhyUsSection />
      <AboutJourneySection />
      <AboutTeamSection />
      <CTASection/>
      <Footer />
    </div>
  );
}
