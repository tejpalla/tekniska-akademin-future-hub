
import Hero from "@/components/Hero";
import AboutCourse from "@/components/AboutCourse";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import AboutAcademy from "@/components/AboutAcademy";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-light-gray">
      <Hero />
      <AboutCourse />
      <HowItWorks />
      <Testimonials />
      <AboutAcademy />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
