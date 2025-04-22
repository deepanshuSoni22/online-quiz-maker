
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuiz } from "@/contexts/QuizContext";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizResult from "@/components/quiz/QuizResult";
import { Button } from "@/components/ui/button";

const QuizDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getQuizById, addQuizAttempt, currentUser } = useQuiz();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  
  const quiz = getQuizById(id || "");
  
  if (!quiz) {
    return (
      <div className="container text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Quiz Not Found</h1>
        <p className="mb-6">The quiz you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/quizzes')}>Browse Quizzes</Button>
      </div>
    );
  }
  
  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  };
  
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // Quiz finished
      setQuizFinished(true);
      
      // Save attempt
      addQuizAttempt({
        quizId: quiz.id,
        userId: currentUser?.id || "guest",
        score: isCorrect ? score + 1 : score,
        totalQuestions: quiz.questions.length,
      });
    }
  };
  
  if (!quizStarted) {
    return (
      <div className="container max-w-3xl mx-auto">
        <div className="bg-background p-8 rounded-lg shadow-sm border">
          <h1 className="text-3xl font-bold mb-2">{quiz.title}</h1>
          <p className="text-muted-foreground mb-6">{quiz.description}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Quiz Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-md">
                <div className="text-sm text-muted-foreground">Number of questions</div>
                <div className="text-2xl font-bold">{quiz.questions.length}</div>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <div className="text-sm text-muted-foreground">Created by</div>
                <div className="text-2xl font-bold">
                  {quiz.createdBy === "admin" ? "QuizCraft Team" : quiz.createdBy}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleStartQuiz} 
              size="lg" 
              className="bg-quiz-primary hover:bg-quiz-secondary"
            >
              Start Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  if (quizFinished) {
    return (
      <div className="container max-w-3xl mx-auto">
        <QuizResult 
          score={score} 
          totalQuestions={quiz.questions.length}
          onRetry={handleStartQuiz}
        />
      </div>
    );
  }
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  return (
    <div className="container max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{quiz.title}</h1>
          <div className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground">
            Question {currentQuestionIndex + 1}/{quiz.questions.length}
          </div>
        </div>
        <div className="w-full bg-muted h-2 rounded-full mt-2">
          <div 
            className="bg-quiz-primary h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <QuizQuestion 
        question={currentQuestion}
        onAnswer={handleAnswer}
        isLast={currentQuestionIndex === quiz.questions.length - 1}
      />
    </div>
  );
};

export default QuizDetailPage;
