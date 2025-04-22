
import { useState } from "react";
import { useQuiz } from "@/contexts/QuizContext";
import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LeaderboardPage = () => {
  const { getLeaderboard, quizzes } = useQuiz();
  const [filter, setFilter] = useState("all");
  
  const allAttempts = getLeaderboard();
  
  const filteredAttempts = filter === "all" 
    ? allAttempts 
    : allAttempts.filter(attempt => attempt.quizId === filter);
  
  return (
    <div className="container max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
      <p className="text-muted-foreground mb-8">See who's scoring highest on our quizzes!</p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">{allAttempts.length}</CardTitle>
            <CardDescription>Total Quiz Attempts</CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">
              {Math.round(
                allAttempts.reduce((acc, curr) => 
                  acc + ((curr.score / curr.totalQuestions) * 100), 0) / 
                (allAttempts.length || 1)
              )}%
            </CardTitle>
            <CardDescription>Average Score</CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">
              {allAttempts.length > 0 ? 
                Math.max(...allAttempts.map(a => (a.score / a.totalQuestions) * 100)) : 0}%
            </CardTitle>
            <CardDescription>Top Score</CardDescription>
          </CardHeader>
        </Card>
      </div>
      
      <div className="mb-6 bg-background dark:bg-muted p-4 rounded-md border flex flex-wrap gap-3">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-md ${
            filter === "all" 
              ? "bg-quiz-primary text-white" 
              : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          All Quizzes
        </button>
        {quizzes.map(quiz => (
          <button
            key={quiz.id}
            onClick={() => setFilter(quiz.id)}
            className={`px-4 py-2 rounded-md ${
              filter === quiz.id 
                ? "bg-quiz-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {quiz.title}
          </button>
        ))}
      </div>
      
      {filteredAttempts.length > 0 ? (
        <LeaderboardTable attempts={filteredAttempts} />
      ) : (
        <div className="text-center py-12 bg-background dark:bg-muted rounded-lg border">
          <h3 className="text-xl font-medium mb-2">No attempts yet</h3>
          <p className="text-muted-foreground">
            Be the first one to set a high score!
          </p>
        </div>
      )}
    </div>
  );
};

export default LeaderboardPage;
