
const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-cyan mb-4">Tekniska Akademin</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sveriges ledande utbildning inom AI-verktyg och digital marketing. 
              Vi förbereder dig för framtidens arbetsmarknad.
            </p>
            <div className="text-gray-300">
              <div className="mb-2"></div>
              <div className="mb-2"></div>
              <div>📍 Stockholm, Sverige</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-cyan mb-4">Kurser</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow transition-colors">AI-verktyg & Automation</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Digital marknadsföring</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Career Coaching</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-cyan mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow transition-colors">Om Oss</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Ansök Nu</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Alumni</a></li>
              <li><a href="mailto:utbildning@kompetensakademin.net" className="hover:text-yellow transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Tekniska Akademin och Kompetensakademin är en del av HAYP Sweden AB. |  
            <a href="#" className="hover:text-yellow transition-colors ml-2">Integritetspolicy</a> | 
            <a href="#" className="hover:text-yellow transition-colors ml-2">Användarvillkor</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
