
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useToast } from "@/components/ui/use-toast";

// Define types for our quiz data
export type QuizQuestion = {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
};

export type Quiz = {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  questions: QuizQuestion[];
  createdAt: Date;
};

export type QuizAttempt = {
  id: string;
  quizId: string;
  userId: string;
  score: number;
  totalQuestions: number;
  date: Date;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

interface QuizContextType {
  quizzes: Quiz[];
  userAttempts: QuizAttempt[];
  currentUser: User | null;
  addQuiz: (quiz: Omit<Quiz, 'id' | 'createdAt'>) => void;
  addQuizAttempt: (attempt: Omit<QuizAttempt, 'id' | 'date'>) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  getQuizById: (id: string) => Quiz | undefined;
  getLeaderboard: () => QuizAttempt[];
}

// Sample data
const sampleQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of JavaScript basics',
    createdBy: 'admin',
    questions: [
      {
        id: '1-1',
        text: 'Which of these is not a JavaScript data type?',
        options: ['String', 'Boolean', 'Float', 'Symbol'],
        correctAnswer: 2,
      },
      {
        id: '1-2',
        text: 'What does the "===" operator do?',
        options: [
          'Checks for equality with type conversion',
          'Checks for equality without type conversion',
          'Assigns a value to a variable',
          'None of the above',
        ],
        correctAnswer: 1,
      },
      {
        id: '1-3',
        text: 'Which method adds an element to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 0,
      },
    ],
    createdAt: new Date('2023-01-15'),
  },
  {
    id: '2',
    title: 'Web Development Basics',
    description: 'Test your knowledge of HTML, CSS and responsive design',
    createdBy: 'admin',
    questions: [
      {
        id: '2-1',
        text: 'What does CSS stand for?',
        options: [
          'Computer Style Sheets',
          'Creative Style Sheets',
          'Cascading Style Sheets',
          'Colorful Style Sheets',
        ],
        correctAnswer: 2,
      },
      {
        id: '2-2',
        text: 'Which HTML tag is used to define an internal style sheet?',
        options: ['<css>', '<script>', '<style>', '<link>'],
        correctAnswer: 2,
      },
      {
        id: '2-3',
        text: 'Which CSS property controls the text size?',
        options: ['font-size', 'text-size', 'text-style', 'font-style'],
        correctAnswer: 0,
      },
    ],
    createdAt: new Date('2023-02-20'),
  },
];

const sampleAttempts: QuizAttempt[] = [
  {
    id: '1',
    quizId: '1',
    userId: 'user1',
    score: 3,
    totalQuestions: 3,
    date: new Date('2023-03-15'),
  },
  {
    id: '2',
    quizId: '1',
    userId: 'user2',
    score: 2,
    totalQuestions: 3,
    date: new Date('2023-03-16'),
  },
];

const sampleUsers: User[] = [
  {
    id: 'admin',
    name: 'Admin User',
    email: 'admin@quizcraft.com',
  },
  {
    id: 'user1',
    name: 'John Doe',
    email: 'john@example.com',
  },
  {
    id: 'user2',
    name: 'Jane Smith',
    email: 'jane@example.com',
  },
];

// Create context
const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(sampleQuizzes);
  const [userAttempts, setUserAttempts] = useState<QuizAttempt[]>(sampleAttempts);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { toast } = useToast();

  const addQuiz = (quizData: Omit<Quiz, 'id' | 'createdAt'>) => {
    const newQuiz: Quiz = {
      ...quizData,
      id: `quiz-${Date.now()}`,
      createdAt: new Date(),
    };
    setQuizzes([...quizzes, newQuiz]);
    toast({
      title: 'Quiz Created',
      description: `"${newQuiz.title}" has been created successfully!`,
    });
  };

  const addQuizAttempt = (attemptData: Omit<QuizAttempt, 'id' | 'date'>) => {
    const newAttempt: QuizAttempt = {
      ...attemptData,
      id: `attempt-${Date.now()}`,
      date: new Date(),
    };
    setUserAttempts([...userAttempts, newAttempt]);
  };

  const login = (email: string, password: string) => {
    // For demo purposes, simple login
    if (email === 'admin@quizcraft.com' && password === 'password') {
      setCurrentUser(sampleUsers[0]);
      toast({
        title: 'Login Successful',
        description: `Welcome back, ${sampleUsers[0].name}!`,
      });
      return true;
    }
    toast({
      title: 'Login Failed',
      description: 'Invalid email or password. Try admin@quizcraft.com / password',
      variant: 'destructive',
    });
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    toast({
      title: 'Logged Out',
      description: 'You have been logged out successfully.',
    });
  };

  const getQuizById = (id: string) => {
    return quizzes.find((quiz) => quiz.id === id);
  };

  const getLeaderboard = () => {
    return [...userAttempts].sort((a, b) => {
      // Sort by percentage score
      const aPercentage = (a.score / a.totalQuestions) * 100;
      const bPercentage = (b.score / b.totalQuestions) * 100;
      return bPercentage - aPercentage;
    });
  };

  const value = {
    quizzes,
    userAttempts,
    currentUser,
    addQuiz,
    addQuizAttempt,
    login,
    logout,
    getQuizById,
    getLeaderboard,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
