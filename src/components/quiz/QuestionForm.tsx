
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Plus } from "lucide-react";
import { useState } from "react";
import { QuizQuestion } from "@/contexts/QuizContext";

interface QuestionFormProps {
  onAddQuestion: (question: Omit<QuizQuestion, "id">) => void;
}

const QuestionForm = ({ onAddQuestion }: QuestionFormProps) => {
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddQuestion = () => {
    if (!questionText.trim()) {
      alert("Please enter a question");
      return;
    }

    if (options.some(option => !option.trim())) {
      alert("Please fill in all options");
      return;
    }

    if (correctAnswer === null) {
      alert("Please select a correct answer");
      return;
    }

    onAddQuestion({
      text: questionText,
      options,
      correctAnswer,
    });

    // Reset form
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer(null);
  };

  return (
    <Card className="p-4 mb-6">
      <h3 className="text-lg font-medium mb-4">Add New Question</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="question" className="block text-sm font-medium mb-1">
            Question
          </label>
          <Textarea
            id="question"
            placeholder="Enter your question here"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Answer Options</label>
          <div className="space-y-3">
            {options.map((option, index) => (
              <div key={index} className="flex gap-2 items-center">
                <Input
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
                <Button
                  type="button"
                  size="icon"
                  variant={correctAnswer === index ? "default" : "outline"}
                  onClick={() => setCorrectAnswer(index)}
                  className={correctAnswer === index ? "bg-quiz-primary" : ""}
                >
                  {correctAnswer === index ? "✓" : `${index + 1}`}
                </Button>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Click on the button next to the correct answer.
          </p>
        </div>

        <Button onClick={handleAddQuestion} className="w-full">
          <Plus size={16} className="mr-2" />
          Add Question
        </Button>
      </div>
    </Card>
  );
};

export default QuestionForm;
