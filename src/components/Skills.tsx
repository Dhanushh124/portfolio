
const Skills = () => {
  const frontendTools = [
    { name: "React", image: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "TypeScript", image: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "CSS/SCSS", image: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "Figma", image: "https://cdn.worldvectorlogo.com/logos/figma-5.svg" },
    { name: "HTML", image: "https://cdn.worldvectorlogo.com/logos/html-1.svg" }
  ];

  const backendTools = [
    { name: "Node.js", image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "MongoDB", image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Git", image: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "Express", image: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
  ];

  const programmingLanguages = [
    { name: "C", image: "https://cdn.worldvectorlogo.com/logos/c-1.svg" },
    { name: "C++", image: "https://cdn.worldvectorlogo.com/logos/c.svg" },
    { name: "Java", image: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
    { name: "JavaScript", image: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
    { name: "Python", image: "https://cdn.worldvectorlogo.com/logos/python-5.svg" }
  ];

  const developmentTools = [
    { name: "GitHub", image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
    { name: "VS Code", image: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
    { name: "Google Colab", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Colaboratory_SVG_Logo.svg/1200px-Google_Colaboratory_SVG_Logo.svg.png" }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-center hover:text-portfolio-green transition-colors duration-300">Skills & Tools</h2>
          <p className="section-subtitle text-center">
            My technical skills and the tools I use to bring ideas to life
          </p>
        </div>

        <div className="mt-16 space-y-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-black text-center">Programming Languages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
              {programmingLanguages.map((lang, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-4 rounded-md bg-white hover:bg-portfolio-green/10 transition-all duration-300 transform hover:scale-110 cursor-pointer group w-full"
                >
                  <img src={lang.image} alt={lang.name} className="w-12 h-12 mb-3 group-hover:animate-pulse" />
                  <span className="text-lg font-medium text-portfolio-gray group-hover:text-portfolio-green">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-black text-center">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
              {frontendTools.map((tool, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-md bg-white hover:bg-portfolio-green/10 transition-all duration-300 transform hover:scale-110 cursor-pointer group w-full"
                >
                  <img src={tool.image} alt={tool.name} className="w-12 h-12 mb-3 group-hover:animate-pulse" />
                  <span className="text-sm font-medium text-portfolio-gray group-hover:text-portfolio-green">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-black text-center">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              {backendTools.map((tool, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-md bg-white hover:bg-portfolio-green/10 transition-all duration-300 transform hover:scale-110 cursor-pointer group w-full"
                >
                  <img src={tool.image} alt={tool.name} className="w-12 h-12 mb-3 group-hover:animate-pulse" />
                  <span className="text-sm font-medium text-portfolio-gray group-hover:text-portfolio-green">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-black text-center">Development Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
              {developmentTools.map((tool, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-md bg-white hover:bg-portfolio-green/10 transition-all duration-300 transform hover:scale-110 cursor-pointer group w-full"
                >
                  <img src={tool.image} alt={tool.name} className="w-12 h-12 mb-3 group-hover:animate-pulse" />
                  <span className="text-sm font-medium text-portfolio-gray group-hover:text-portfolio-green">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
