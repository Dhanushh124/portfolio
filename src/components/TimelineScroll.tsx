
import { useEffect, useRef } from "react";

const TimelineScroll = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const timelineItems = timeline.querySelectorAll('.timeline-item');
      
      timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          (item as HTMLElement).classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once initially
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timelineData = [
    {
      year: "2020",
      title: "Started College",
      description: "Began B.Tech in Computer Science at CMR Institute of Technology."
    },
    {
      year: "2022",
      title: "First Web Project",
      description: "Built my first full-stack application using the MERN stack."
    },
    {
      year: "2023",
      title: "Internship",
      description: "Worked as a frontend development intern, honing my React skills."
    },
    {
      year: "2024",
      title: "Stream Circle",
      description: "Developed Stream Circle, an OTT Exchange Platform."
    },
    {
      year: "2026",
      title: "Graduation",
      description: "Expected graduation with a degree in Computer Science."
    }
  ];

  return (
    <div className="py-10" ref={timelineRef}>
      <h2 className="text-3xl font-bold text-center mb-12 text-portfolio-black">My Journey</h2>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-portfolio-green opacity-70"></div>
        
        {timelineData.map((item, index) => (
          <div 
            key={index}
            className={`timeline-item flex items-center justify-${
              index % 2 === 0 ? 'start' : 'end'
            } relative mb-16 opacity-0 ${
              index % 2 === 0 ? 'timeline-left' : 'timeline-right'
            }`}
            style={{
              marginLeft: index % 2 === 0 ? '0' : '50%',
              marginRight: index % 2 === 0 ? '50%' : '0',
              transform: `translateX(${index % 2 === 0 ? '-40px' : '40px'})`,
              transition: 'all 0.7s ease-out',
            }}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-portfolio-yellow border-4 border-white z-10"></div>
            
            {/* Content */}
            <div className={`w-full bg-white p-6 rounded-lg shadow-md ${
              index % 2 === 0 ? 'mr-8' : 'ml-8'
            } transform hover:scale-105 transition-transform duration-300`}>
              <div className="text-portfolio-yellow font-bold text-lg mb-1">{item.year}</div>
              <h3 className="text-xl font-bold mb-2 text-portfolio-black">{item.title}</h3>
              <p className="text-portfolio-gray">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineScroll;
