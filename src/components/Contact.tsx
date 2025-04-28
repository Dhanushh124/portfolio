
import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-portfolio-green transition-transform group-hover:scale-110" />,
      title: "Email",
      value: "marivadadhanushreddy@gmail.com",
      link: "mailto:marivadadhanushreddy@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5 text-portfolio-green transition-transform group-hover:scale-110" />,
      title: "Location",
      value: "Hyderabad, India",
      link: "https://maps.app.goo.gl/MJgMbkPS2jXF7vbE8"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5 transition-transform group-hover:scale-125" />,
      name: "GitHub",
      url: "https://github.com/Dhanushh124"
    },
    {
      icon: <Linkedin className="w-5 h-5 transition-transform group-hover:scale-125" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dhanush-reddy-826408295/"
    },
    {
      icon: <Instagram className="w-5 h-5 transition-transform group-hover:scale-125" />,
      name: "Instagram",
      url: "https://www.instagram.com/dhanushh__12"
    }
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="section-title hover:text-portfolio-green transition-colors duration-300">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-portfolio-light-gray p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-black">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="bg-white p-3 rounded-full shadow-sm group-hover:bg-portfolio-green/10 transition-colors">{info.icon}</div>
                    <div>
                      <h4 className="font-medium text-portfolio-black">{info.title}</h4>
                      <a 
                        href={info.link} 
                        className={`text-portfolio-gray hover:text-portfolio-green transition-colors ${index === 0 ? 'text-xs sm:text-sm md:text-base break-all' : ''}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-medium mb-4 text-portfolio-black">Connect with me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      className="bg-white p-3 rounded-full shadow-sm hover:bg-portfolio-green hover:text-white transition-all group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-black">Send Me a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
