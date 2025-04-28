import { TypeAnimation } from 'react-type-animation';
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Introduction */}
          <div className="space-y-5 md:text-left text-center order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-portfolio-black">
              Hi, I'm <span className="text-portfolio-green">Marivada Dhanush</span>
            </h1>
            <div className="text-xl md:text-2xl text-portfolio-gray font-medium">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  1000,
                  'Backend Developer',
                  1000,
                  'Full Stack Developer',
                  1000,
                  'UI/UX Designer',
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </div>
            <p className="text-portfolio-gray md:text-left text-center">
              I am a passionate and creative software developer dedicated to crafting
              innovative solutions.
            </p>
            
            <div className="flex gap-4 mt-8 md:justify-start justify-center">
              <a href="#about" className="btn-primary">
                View My Portfolio
              </a>
              <a 
                href="/lovable-uploads/Dhanush_Resume.jpg" 
                download="Dhanush_Resume.jpg"
                className="btn-secondary flex items-center"
              >
                <Download className="w-4 h-4 mr-1" /> Download Resume
              </a>
            </div>
          </div>

          {/* Right Column - Image with Enhanced Animation */}
          <div className="flex justify-center order-1 md:order-2 relative group">
            <div className="relative">
              {/* Enhanced Background Animations */}
              <div className="absolute -z-10 w-full h-full rounded-full bg-portfolio-green/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"></div>
              <div className="absolute -z-10 w-4/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-portfolio-yellow/10 group-hover:scale-125 group-hover:-rotate-6 transition-all duration-700"></div>
              
              {/* Additional hover effects */}
              <div className="absolute -z-10 w-full h-full rounded-full bg-blue-300/10 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>
              <div className="absolute -z-10 w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
              
              {/* Profile Image with hover effect */}
              <div className="rounded-full overflow-hidden w-64 h-64 md:w-96 md:h-96 border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/lovable-uploads/f00692b8-65ec-4bf5-bc81-cc226d991d53.png"
                  alt="Dhanush"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
