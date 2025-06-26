
import { Lightbulb, Code, Users, Rocket } from "lucide-react";

const AboutCourse = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow" />,
      title: "AI & Machine Learning",
      description: "Lär dig ChatGPT, Midjourney, och andra AI-verktyg som revolutionerar branscher."
    },
    {
      icon: <Code className="w-8 h-8 text-cyan" />,
      title: "Digital Marketing",
      description: "Mästra SEO, social media marketing, och data-driven strategier för framgång."
    },
    {
      icon: <Users className="w-8 h-8 text-yellow" />,
      title: "Hands-on Learning",
      description: "Praktiska projekt och verkliga case studies för att bygga din portfolio."
    },
    {
      icon: <Rocket className="w-8 h-8 text-cyan" />,
      title: "Career Ready",
      description: "Jobbcoaching, CV-hjälp och direktkontakt med arbetsgivare inom tech."
    }
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Varför Välja <span className="text-cyan">Tekniska Akademin?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vår utbildning kombinerar de senaste AI-verktygen med beprövade digital marketing-strategier. 
            Du får praktisk erfarenhet som direkt kan tillämpas i arbetslivet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-4">Vad Du Kommer Att Lära Dig</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-cyan mb-2">AI Tools & Automation</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• ChatGPT för content creation</li>
                  <li>• Midjourney för visuell design</li>
                  <li>• AI-baserad dataanalys</li>
                  <li>• Automation workflows</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan mb-2">Digital Marketing</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• SEO & Content Marketing</li>
                  <li>• Social Media Strategy</li>
                  <li>• Google Ads & Analytics</li>
                  <li>• Conversion Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
