
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "@/contexts/QuizContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { quizzes } = useQuiz();
  
  return (
    <div className="container">
      <div className="py-12 md:py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Create and Take <span className="bg-clip-text quiz-gradient leading-snug px-2 rounded">Quizzes</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Test your knowledge, challenge your friends, and track your progress with our easy-to-use quiz platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate('/quizzes')} 
            className="text-lg py-6 px-8 bg-quiz-primary hover:bg-quiz-secondary"
          >
            Browse Quizzes
          </Button>
          <Button 
            onClick={() => navigate('/login')} 
            variant="outline" 
            className="text-lg py-6 px-8"
          >
            Create Your Own Quiz
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-background dark:bg-muted p-8 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold mb-4">For Quiz Takers</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="mr-3 text-quiz-primary font-bold">✓</div>
              <p>Access a wide variety of quizzes on different topics</p>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-quiz-primary font-bold">✓</div>
              <p>Get instant feedback on your answers</p>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-quiz-primary font-bold">✓</div>
              <p>Track your progress and improve your knowledge</p>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-quiz-primary font-bold">✓</div>
              <p>Compare your scores on the leaderboard</p>
            </li>
          </ul>
          <Button
            onClick={() => navigate('/quizzes')}
            variant="outline"
            className="mt-6"
          >
            Start Taking Quizzes
          </Button>
        </div>

        <div className="bg-background dark:bg-muted p-8 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold mb-4">For Quiz Creators</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="mr-3 text-quiz-primary font-bold">✓</div>
              <p>Create custom quizzes with multiple-choice questions</p>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-quiz-primary font-bold">✓</div>
              <p>Share your quizzes with others</p>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-quiz-primary font-bold">✓</div>
              <p>View analytics on quiz performance</p>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-quiz-primary font-bold">✓</div>
              <p>Build your reputation as a quiz master</p>
            </li>
          </ul>
          <Button
            onClick={() => navigate('/login')}
            variant="outline"
            className="mt-6"
          >
            Create a Quiz
          </Button>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Quizzes</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {quizzes.slice(0, 3).map((quiz) => (
            <div key={quiz.id} className="bg-background dark:bg-muted p-6 rounded-lg shadow-sm border transition-all hover:shadow-md">
              <h3 className="font-bold text-lg mb-2">{quiz.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{quiz.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{quiz.questions.length} questions</span>
                <Button 
                  onClick={() => navigate(`/quizzes/${quiz.id}`)}
                  size="sm"
                  className="bg-quiz-primary hover:bg-quiz-secondary"
                >
                  Take Quiz
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
