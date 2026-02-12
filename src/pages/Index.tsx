import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HackerHatsSection from "@/components/HackerHatsSection";
import CareersSection from "@/components/CareersSection";
import RoadmapSection from "@/components/RoadmapSection";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HackerHatsSection />
      <CareersSection />
      <RoadmapSection />
      <QuizSection />
      <Footer />
    </div>
  );
};

export default Index;
