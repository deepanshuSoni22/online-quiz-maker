
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuizQuestion as QuestionType } from "@/contexts/QuizContext";

interface QuizQuestionProps {
  question: QuestionType;
  onAnswer: (isCorrect: boolean) => void;
  isLast: boolean;
}

const QuizQuestion = ({ question, onAnswer, isLast }: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (hasAnswered) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === question.correctAnswer;
    setHasAnswered(true);
    
    // Wait a moment to show the answer feedback before moving on
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedOption(null);
      setHasAnswered(false);
    }, 1500);
  };

  return (
    <Card className="mb-6 w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl">{question.text}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={`p-4 border rounded-md cursor-pointer transition-all answer-hover ${
                selectedOption === index ? "border-2 border-quiz-primary bg-quiz-light" : ""
              } ${
                hasAnswered && selectedOption === index
                  ? index === question.correctAnswer
                    ? "bg-green-100 border-green-500"
                    : "bg-red-100 border-red-500"
                  : ""
              } ${
                hasAnswered && index === question.correctAnswer
                  ? "bg-green-100 border-green-500"
                  : ""
              }`}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full flex items-center justify-center border mr-3 text-sm">
                  {String.fromCharCode(65 + index)}
                </div>
                <span>{option}</span>
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          onClick={handleSubmit} 
          disabled={selectedOption === null || hasAnswered}
          className="w-full mt-6 bg-quiz-primary hover:bg-quiz-secondary"
        >
          {hasAnswered ? "Processing..." : isLast ? "Finish Quiz" : "Next Question"}
        </Button>
        
        {hasAnswered && (
          <div className={`mt-4 p-3 rounded-md text-center font-medium ${
            selectedOption === question.correctAnswer 
              ? "bg-green-100 text-green-800" 
              : "bg-red-100 text-red-800"
          }`}>
            {selectedOption === question.correctAnswer 
              ? "Correct! Well done!" 
              : `Wrong! The correct answer is ${String.fromCharCode(65 + question.correctAnswer)}`}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;
