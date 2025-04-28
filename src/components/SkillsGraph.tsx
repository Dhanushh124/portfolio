
import { useState } from "react";
import { Progress } from "@/components/ui/custom-progress";

interface Skill {
  name: string;
  level: number;
  category: string;
  relatedProjects: string[];
}

const SkillsGraph = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  
  const skills: Skill[] = [
    { name: "JavaScript", level: 90, category: "Frontend", relatedProjects: ["Stream Circle", "Zerodha Clone", "Airbnb Clone", "E-commerce Website"] },
    { name: "React", level: 85, category: "Frontend", relatedProjects: ["Stream Circle", "Zerodha Clone", "Airbnb Clone", "E-commerce Website"] },
    { name: "Node.js", level: 80, category: "Backend", relatedProjects: ["Stream Circle", "E-commerce Website"] },
    { name: "UI/UX Design", level: 75, category: "Design", relatedProjects: ["Airbnb Clone", "E-commerce Website"] },
    { name: "TypeScript", level: 70, category: "Frontend", relatedProjects: ["Zerodha Clone"] },
    { name: "MongoDB", level: 75, category: "Backend", relatedProjects: ["Stream Circle"] },
    { name: "CSS/SCSS", level: 85, category: "Frontend", relatedProjects: ["Airbnb Clone", "E-commerce Website"] },
    { name: "Python", level: 65, category: "Backend", relatedProjects: ["Data Analysis Projects"] },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {categories.map((category, idx) => (
          <div key={idx} className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-black">{category}</h3>
            
            <div className="space-y-6">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                <div 
                  key={index} 
                  className="space-y-2 cursor-pointer hover:opacity-90 transition-all"
                  onClick={() => handleSkillClick(skill)}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-portfolio-green font-medium">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2" 
                    indicatorColor="bg-portfolio-green"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div className="mt-8 p-6 bg-portfolio-light-gray rounded-lg animate-fade-in">
          <h4 className="text-xl font-bold mb-2">{selectedSkill.name} Related Projects:</h4>
          <ul className="list-disc pl-5">
            {selectedSkill.relatedProjects.map((project, idx) => (
              <li key={idx} className="text-portfolio-gray mb-1">{project}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SkillsGraph;
