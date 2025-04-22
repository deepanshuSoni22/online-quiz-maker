
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/QuizContext";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { currentUser, logout } = useQuiz();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="border-b bg-background text-foreground py-3 sticky top-0 z-10">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-primary">
            QuizCraft
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/quizzes" className="text-sm font-medium hover:text-primary">
            Quizzes
          </Link>
          <Link to="/leaderboard" className="text-sm font-medium hover:text-primary">
            Leaderboard
          </Link>
          {currentUser && (
            <Link to="/create" className="text-sm font-medium hover:text-primary">
              Create Quiz
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="mr-2"
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </Button>
          
          {currentUser ? (
            <div className="flex items-center gap-2">
              <span className="text-sm hidden md:inline-block">
                Welcome, {currentUser.name}
              </span>
              <Button onClick={logout} variant="outline" size="sm">
                Log Out
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary-dark">Log In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
