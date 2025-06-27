
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan to-yellow relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Rocket className="w-8 h-8 text-white" />
            <span className="text-white font-semibold text-lg tracking-wide">REDO ATT BÖRJA?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Din Tech-Karriär<br />
            Börjar <span className="text-navy">Här</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Gå med i nästa generations tech-talanger. Ansök idag och ta första steget 
            mot en framgångsrik karriär inom AI och digital marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
		  <a href="mailto:utbildning@kompetensakademin.net">
            <Button 
              size="lg" 
              className="bg-navy text-white hover:bg-navy/90 text-xl px-12 py-6 font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Ansök Nu - Begränsade Platser
            </Button>
			</a>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-navy text-xl px-12 py-6 font-bold transition-all duration-300"
            >
              Boka Kostnadsfri Konsultation
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2"> Veckor</div>
              <div className="text-white/80">Intensiv Utbildning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2"> Online</div>
              <div className="text-white/80">Flexibel Schemaläggning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Jobb-Garanti</div>
              <div className="text-white/80">Anställning direkt efter!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
