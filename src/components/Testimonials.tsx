
const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna Lindqvist",
      role: "Digital Marketing Specialist",
      company: "TechStart AB",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b547?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Tekniska Akademin gav mig verktygen jag behövde för att lyckas inom digital marketing. AI-kunskaperna var game-changing för min karriär."
    },
    {
      name: "Erik Johansson", 
      role: "AI Consultant",
      company: "Innovation Hub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Från nybörjare till expert på 12 veckor. Lärarna var fantastiska och jobbcoachingen hjälpte mig hitta min drömtjänst."
    },
    {
      name: "Maria Santos",
      role: "Content Creator",
      company: "Creative Agency",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "AI-verktygen jag lärde mig har revolutionerat mitt arbete. Jag skapar nu content på hälften av tiden med dubbel kvalitet."
    }
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vad Våra <span className="text-yellow">Alumni Säger</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hör från våra framgångsrika studenter som nu arbetar på ledande tech-företag i Sverige.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-navy">{testimonial.name}</h4>
                  <p className="text-cyan font-semibold">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex text-yellow mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
