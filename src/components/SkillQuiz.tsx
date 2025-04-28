
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { PartyPopper } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const allQuestions: Question[] = [
  {
    question: "Which technology is primarily used for styling in this portfolio?",
    options: ["CSS", "Tailwind CSS", "SASS", "Styled Components"],
    correct: 1
  },
  {
    question: "What framework is this portfolio built with?",
    options: ["Angular", "Vue", "React", "Svelte"],
    correct: 2
  },
  {
    question: "What's my primary development focus?",
    options: ["Frontend Only", "Backend Only", "Full Stack", "DevOps"],
    correct: 2
  },
  {
    question: "Which UI component library is used in this portfolio?",
    options: ["Material UI", "Chakra UI", "shadcn/ui", "Ant Design"],
    correct: 2
  },
  {
    question: "What state management solution is used here?",
    options: ["Redux", "MobX", "Zustand", "React Query"],
    correct: 3
  }
];

const SkillQuiz = () => {
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [celebration, setCelebration] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean[]>([]);

  const shuffleQuestions = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3); // Get 3 random questions
  };

  useEffect(() => {
    setCurrentQuestions(shuffleQuestions());
  }, []);

  const handleAnswer = (optionIndex: number) => {
    const isCorrect = optionIndex === currentQuestions[currentQuestion].correct;
    const newAnsweredCorrectly = [...answeredCorrectly];
    newAnsweredCorrectly[currentQuestion] = isCorrect;
    setAnsweredCorrectly(newAnsweredCorrectly);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < currentQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      if (score + (isCorrect ? 1 : 0) === currentQuestions.length) {
        setCelebration(true);
        setTimeout(() => {
          setCelebration(false);
        }, 2000);
      }
    }
  };

  const resetQuiz = () => {
    const allCorrect = answeredCorrectly.every(ans => ans === true);
    if (allCorrect) {
      setCurrentQuestions(shuffleQuestions());
    }
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setCelebration(false);
    setAnsweredCorrectly([]);
  };

  if (!currentQuestions.length) return null;

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-8">Test Your Knowledge</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Skills Quiz</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {celebration && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 animate-fade-in">
                <div className="text-center text-white">
                  <PartyPopper className="w-16 h-16 mx-auto mb-4 animate-bounce-custom" />
                  <h3 className="text-2xl font-bold">Congratulations! 🎉</h3>
                  <p>Perfect Score!</p>
                </div>
              </div>
            )}
            {showScore ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  You scored {score} out of {currentQuestions.length}!
                </h3>
                <Button onClick={resetQuiz} variant="outline">
                  Try Again
                </Button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl mb-4">
                  {currentQuestions[currentQuestion].question}
                </h3>
                <div className="grid gap-3">
                  {currentQuestions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      variant="outline"
                      className="justify-start text-left hover:bg-portfolio-green/10"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  Question {currentQuestion + 1} of {currentQuestions.length}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillQuiz;
