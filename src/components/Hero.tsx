
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-navy via-navy to-primary min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="w-6 h-6 text-yellow" />
              <span className="text-yellow font-semibold tracking-wide">TEKNISKA AKADEMIN</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              
Bemästra  <span className="text-cyan">Al Vertyg</span> & 
              <span className="text-yellow"> Digital marknadsföring</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">Gå med i Sveriges mest innovativa teknikutbildning. Lär dig banbrytande AI-verktyg, digitala marknadsföringsstrategier och framtidssäkra färdigheter som arbetsgivare efterfrågar.





</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-yellow text-black hover:bg-yellow/90 text-lg px-8 py-6 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Ansök Nu - Starta Din Framtid
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-cyan text-cyan hover:bg-cyan hover:text-white text-lg px-8 py-6 font-semibold transition-all duration-300"
              >
                Läs Mer Om Kursen
              </Button>
            </div>
          </div>
          <div className="animate-slide-in-left">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Diverse group of women collaborating with laptops in a modern office"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
