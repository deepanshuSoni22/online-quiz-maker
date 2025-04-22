
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import { QuizProvider } from "./contexts/QuizContext";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import QuizzesPage from "./pages/QuizzesPage";
import QuizDetailPage from "./pages/QuizDetailPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import CreateQuizPage from "./pages/CreateQuizPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <QuizProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quizzes" element={<QuizzesPage />} />
                <Route path="/quizzes/:id" element={<QuizDetailPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path="/create" element={<CreateQuizPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QuizProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
