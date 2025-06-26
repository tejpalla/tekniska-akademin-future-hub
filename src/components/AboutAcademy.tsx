
import { Users, GraduationCap, Rocket } from "lucide-react";

const AboutAcademy = () => {
  const stats = [
    { number: "500+", label: "Utexaminerade Studenter", icon: <GraduationCap className="w-8 h-8" /> },
    { number: "95%", label: "Jobbplaceringsgrad", icon: <Users className="w-8 h-8" /> },
    { number: "50+", label: "Partnerföretag", icon: <Rocket className="w-8 h-8" /> }
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Om  <span className="text-cyan">Tekniska Akademin och Kompetensakademin</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Vi är Sveriges ledande utbildningsaktör inom AI och digital marketing. 
              Sedan 2020 har vi utbildat över 500 studenter som nu arbetar på 
              framgångsrika tech-företag över hela Norden.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Vår mission är att göra avancerad tech-utbildning tillgänglig för alla, 
              oavsett bakgrund. Vi kombinerar de senaste teknologierna med beprövade 
              pedagogiska metoder för att säkerställa att våra studenter är redo 
              för framtidens arbetsmarknad.
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-navy mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-in-left">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Woman using laptop for online learning"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAcademy;
