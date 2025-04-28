
import TimelineScroll from "./TimelineScroll";

const Education = () => {
  const education = [
    {
      degree: "B.Tech Computer Science",
      institution: "CMR Institute of Technology",
      score: "CGPA: 8.05",
      year: "2022 - 2026",
      description: "Specialized in Artificial Intellegence and Machine Learning with distinction."
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      score: "Percentage: 91.5%",
      year: "2020 - 2022",
      description: "Completed my Intermediate education at Narayana Junior College with a strong academic foundation."
    },
    {
      degree: "Secondary education",
      institution: "Nava Jyothi High School",
      score: "GPA: 9.3",
      year: "2020",
      description: "Completed my schooling with a solid academic background and holistic development."
    }
  ];

  return (
    <section id="education" className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title hover:text-portfolio-green transition-colors duration-300">Education & Experience</h2>
          <p className="section-subtitle">
            My academic background and professional journey that shaped my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mt-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-black text-center">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-portfolio-green opacity-0 animate-slide-up transform transition-transform hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-2 flex-wrap">
                    <h4 className="text-lg font-bold text-portfolio-black hover:text-portfolio-green transition-colors duration-300">{item.degree}</h4>
                    <span className="text-sm font-medium bg-portfolio-green/10 text-portfolio-green px-3 py-1 rounded-full mt-1 md:mt-0">
                      {item.year}
                    </span>
                  </div>
                  <div className="text-portfolio-gray font-medium mb-2">{item.institution}</div>
                  <div className="text-portfolio-green font-semibold mb-2">{item.score}</div>
                  <p className="text-portfolio-gray text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
