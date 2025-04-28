
import { ExternalLink, Github } from "lucide-react";
import RandomProject from "./RandomProject";

const Projects = () => {
  const projects = [
    {
      title: "Stream Circle",
      category: "Full Stack",
      image: "/lovable-uploads/c0804fed-f457-4f20-aa06-b67db26d0f24.png",
      description: "OTT Exchange Platform built with the MERN stack.",
      link: "https://github.com/Dhanushh124",
      github: "https://github.com/Dhanushh124"
    },
    {
      title: "Zerodha Clone",
      category: "Web App",
      image: "/lovable-uploads/dc014555-773f-459d-af58-ec8ce8cdd208.png",
      description: "Trading platform clone with real-time stock tracking.",
      link: "https://github.com/Dhanushh124",
      github: "https://github.com/Dhanushh124"
    },
    {
      title: "Airbnb Clone",
      category: "Web Development",
      image: "/lovable-uploads/ae8ab4ed-096f-438b-98b0-39022cf9731c.png",
      description: "Rental property platform clone with booking functionality.",
      link: "https://github.com/Dhanushh124",
      github: "https://github.com/Dhanushh124"
    },
    {
      title: "E-commerce Website",
      category: "Full Stack",
      image: "/lovable-uploads/4dd63304-dc0f-46fe-83b2-72934f41a077.png",
      description: "A fully responsive e-commerce platform with payment integration.",
      link: "https://github.com/Dhanushh124",
      github: "https://github.com/Dhanushh124"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-center hover:text-portfolio-green transition-colors duration-300">
            My Recent Projects
          </h2>
          <p className="section-subtitle text-center">
            Here are some of my recent works. Each project is unique and tackles different challenges.
          </p>
        </div>
        
        <RandomProject />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md card-hover opacity-0 animate-slide-up group"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-portfolio-black">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-portfolio-black group-hover:text-portfolio-green transition-colors duration-300">{project.title}</h3>
                <p className="text-portfolio-gray mb-4">{project.description}</p>
                
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-1 text-sm font-medium text-portfolio-green hover:underline group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="transition-transform group-hover:scale-110" />
                    Live Preview
                  </a>
                  <a 
                    href={project.github} 
                    className="flex items-center gap-1 text-sm font-medium text-portfolio-gray hover:text-portfolio-black group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="transition-transform group-hover:scale-110" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
