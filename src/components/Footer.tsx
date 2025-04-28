
import { ChevronRight, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Dhanushh124",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/dhanush-reddy-826408295/",
      label: "LinkedIn"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/dhanushh__12",
      label: "Instagram"
    }
  ];

  return (
    <footer className="bg-portfolio-black text-white pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Marivada Dhanush<span className="text-portfolio-green">.</span></h3>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-gray-300 hover:text-white transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <div className="transform transition-transform group-hover:scale-110">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-lg font-bold mb-4">Skills</h3>
            <ul className="space-y-2">
              {["UI/UX Design", "Web Development", "Mobile Development", "React", "Node.js"].map((skill) => (
                <li key={skill}>
                  <a 
                    href="#skills" 
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                    {skill}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Me</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start group">
                <div className="mt-1 text-portfolio-green group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">Hyderadabd, India</span>
              </li>
              <li className="flex gap-3 items-start group">
                <div className="mt-1 text-portfolio-green group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:marivadadhanushreddy@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  marivadadhanushreddy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Dhanush. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
