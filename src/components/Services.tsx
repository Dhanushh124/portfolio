
import { Laptop, Monitor, Smartphone, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-portfolio-green" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that enhance user experience and drive engagement."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-portfolio-green" />,
      title: "Application Development",
      description: "Building robust, scalable applications that solve real-world problems efficiently."
    },
    {
      icon: <Laptop className="w-10 h-10 text-portfolio-green" />,
      title: "Website Design",
      description: "Designing responsive websites that look great on all devices and load quickly."
    },
    {
      icon: <Star className="w-10 h-10 text-portfolio-green" />,
      title: "Brand Identity",
      description: "Crafting unique visual identities that resonate with your target audience and stand out."
    }
  ];

  return (
    <section id="services" className="py-16 bg-portfolio-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="section-title">Services I Provide</h2>
          <p className="section-subtitle">
            I offer a wide range of services to help businesses and individuals establish their presence online and create meaningful digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center card-hover opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-portfolio-green/10 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-portfolio-black">{service.title}</h3>
              <p className="text-portfolio-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
