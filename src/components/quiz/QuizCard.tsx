
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Quiz } from "@/contexts/QuizContext";

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard = ({ quiz }: QuizCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="h-full transition-all hover:shadow-md animate-fade-in">
      <CardHeader>
        <CardTitle>{quiz.title}</CardTitle>
        <CardDescription>{quiz.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2">{quiz.questions.length} Questions</p>
          <p>Created: {new Date(quiz.createdAt).toLocaleDateString()}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          onClick={() => navigate(`/quizzes/${quiz.id}`)}
          className="bg-quiz-primary hover:bg-quiz-secondary"
        >
          Take Quiz
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
