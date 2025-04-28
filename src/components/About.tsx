
const About = () => {
  const stats = [
    { value: "3+", label: "Projects Completed" },
   
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-full h-96 rounded-xl overflow-hidden group">
                <img 
                  src="/lovable-uploads/8840dc96-84cb-4c04-8605-2a74f585b88b.png" 
                  alt="Dhanush working" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 bg-portfolio-yellow/20 w-48 h-48 rounded-xl -z-10 animate-float"></div>
              <div className="absolute -top-6 -left-6 bg-portfolio-green/20 w-48 h-48 rounded-xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
          
          <div className="space-y-6 opacity-0 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <h2 className="section-title text-center md:text-left hover:text-portfolio-green transition-colors duration-300">About Me</h2>
            
            <p className="text-portfolio-gray text-lg">
              Hi! I'm Dhanush, a passionate web developer and problem solver. 
              I specialize in creating beautiful, responsive websites that deliver seamless user experiences.
              Beyond web development, I love tackling challenging problems — whether
              it's optimizing a piece of code or finding innovative solutions to complex technical issues.
              I believe in continuous learning, creativity,
              and writing clean, efficient code. Let's build something amazing together!
            </p>
            
            <p className="text-portfolio-gray text-lg">
             Currently pursuing Computer Science Engineering with a focus on Artificial Intelligence and Machine Learning at CMR Institute of Technology,
              I combine my academic knowledge with practical development skills to create innovative solutions.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center transform transition-transform hover:scale-110 duration-300">
                  <div className="text-3xl font-bold text-portfolio-green mb-1">{stat.value}</div>
                  <div className="text-sm text-portfolio-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
