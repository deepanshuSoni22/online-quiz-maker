
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { QuizAttempt } from "@/contexts/QuizContext";

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRetry?: () => void;
  attempt?: QuizAttempt;
}

const QuizResult = ({ score, totalQuestions, onRetry, attempt }: QuizResultProps) => {
  const navigate = useNavigate();
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = '';
  let color = '';
  
  if (percentage >= 80) {
    message = 'Excellent! You\'re a quiz master!';
    color = 'text-green-600 dark:text-green-400';
  } else if (percentage >= 60) {
    message = 'Good job! You know your stuff!';
    color = 'text-blue-600 dark:text-blue-400';
  } else if (percentage >= 40) {
    message = 'Not bad! Keep learning!';
    color = 'text-yellow-600 dark:text-yellow-400';
  } else {
    message = 'Keep practicing! You\'ll improve!';
    color = 'text-red-600 dark:text-red-400';
  }

  return (
    <Card className="w-full max-w-md mx-auto animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Quiz Results</CardTitle>
        <CardDescription className="text-center">
          {attempt && `Completed on ${new Date(attempt.date).toLocaleDateString()}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">
            {score}/{totalQuestions}
          </div>
          <div className={`text-xl ${color}`}>{message}</div>
          <div className="mt-2 text-2xl font-semibold">{percentage}%</div>
        </div>
        
        <div className="flex justify-center space-x-4">
          {onRetry && (
            <Button 
              onClick={onRetry} 
              variant="outline"
            >
              Try Again
            </Button>
          )}
          <Button 
            onClick={() => navigate('/quizzes')} 
            className="bg-quiz-primary hover:bg-quiz-secondary"
          >
            More Quizzes
          </Button>
          <Button 
            onClick={() => navigate('/leaderboard')}
            variant="outline" 
          >
            Leaderboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizResult;
