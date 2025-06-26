
const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Ansök & Kom Igång",
      description: "Enkelt ansökningsformulär och snabb feedback. Vi hjälper dig att komma igång direkt."
    },
    {
      step: "02", 
      title: "Intensiv Utbildning",
      description: "12 veckor av praktisk träning med AI-verktyg och digital marketing. Lär av branschexperter."
    },
    {
      step: "03",
      title: "Bygg Din Portfolio",
      description: "Skapa verkliga projekt och case studies som visar dina färdigheter för framtida arbetsgivare."
    },
    {
      step: "04",
      title: "Starta Din Karriär",
      description: "Jobbcoaching, nätverksmöjligheter och direkt kontakt med tech-företag som söker talang."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Så Här <span className="text-cyan">Fungerar Det</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Från ansökan till karriärstart - vi guidar dig genom hela resan mot en framgångsrik tech-karriär.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan via-yellow to-cyan transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan to-yellow rounded-full flex items-center justify-center mx-auto shadow-lg hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {/* Connector line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden w-1 h-16 bg-gradient-to-b from-cyan to-yellow mx-auto mt-4"></div>
                  )}
                </div>
                <div className="bg-light-gray rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
