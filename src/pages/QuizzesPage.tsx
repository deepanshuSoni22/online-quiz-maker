
import { useState } from "react";
import { useQuiz } from "@/contexts/QuizContext";
import QuizCard from "@/components/quiz/QuizCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const QuizzesPage = () => {
  const { quizzes } = useQuiz();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuizzes = quizzes.filter((quiz) => 
    quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    quiz.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Quizzes</h1>
        <p className="text-muted-foreground">
          Browse all available quizzes or search for specific topics.
        </p>
      </div>

      <div className="relative max-w-md mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="Search quizzes..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredQuizzes.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium mb-2">No quizzes found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or check back later for new quizzes.
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizzesPage;
