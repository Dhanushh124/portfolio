
import { useState } from "react";
import { ExternalLink, Github, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
  github: string;
}

const RandomProject = () => {
  const projects = [
    {
      title: "Stream Circle",
      category: "Full Stack",
      image: "public/lovable-uploads/c0804fed-f457-4f20-aa06-b67db26d0f24.png",
      description: "OTT Exchange Platform built with the MERN stack.",
      link: "#",
      github: "https://github.com/Dhanushh124"
    },
    {
      title: "Zerodha Clone",
      category: "Web App",
      image: "public/lovable-uploads/dc014555-773f-459d-af58-ec8ce8cdd208.png",
      description: "Trading platform clone with real-time stock tracking.",
      link: "#",
      github: "https://github.com/Dhanushh124"
    },
    {
      title: "Airbnb Clone",
      category: "Web Development",
      image: "public/lovable-uploads/ae8ab4ed-096f-438b-98b0-39022cf9731c.png",
      description: "Rental property platform clone with booking functionality.",
      link: "#",
      github: "https://github.com/Dhanushh124"
    },
    {
      title: "E-commerce Website",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
      description: "A fully responsive e-commerce platform with payment integration.",
      link: "#",
      github: "https://github.com/Dhanushh124"
    }
  ];

  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomProject = () => {
    setIsAnimating(true);
    
    // Get a random project that's different from the current one
    let newProject;
    do {
      newProject = projects[Math.floor(Math.random() * projects.length)];
    } while (currentProject && newProject.title === currentProject.title && projects.length > 1);
    
    setTimeout(() => {
      setCurrentProject(newProject);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <Button 
        onClick={getRandomProject} 
        className="mb-8 bg-portfolio-yellow text-portfolio-black hover:bg-portfolio-yellow/90 flex items-center gap-2 transform transition hover:scale-105 active:scale-95"
      >
        <Shuffle size={18} />
        Surprise Me
      </Button>
      
      {currentProject && (
        <div 
          className={`bg-white rounded-xl overflow-hidden shadow-lg max-w-md w-full ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          } transition-all duration-500`}
        >
          <div className="h-64 overflow-hidden">
            <img 
              src={currentProject.image} 
              alt={currentProject.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-portfolio-black">
              {currentProject.category}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-portfolio-black">{currentProject.title}</h3>
            <p className="text-portfolio-gray mb-4">{currentProject.description}</p>
            
            <div className="flex gap-3">
              <a 
                href={currentProject.link} 
                className="flex items-center gap-1 text-sm font-medium text-portfolio-green hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Live Preview
              </a>
              <a 
                href={currentProject.github} 
                className="flex items-center gap-1 text-sm font-medium text-portfolio-gray hover:text-portfolio-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomProject;
