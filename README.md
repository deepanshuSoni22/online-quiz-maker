# Online Quiz Maker 🎉

An interactive online quiz platform where examiners can create multiple-choice quizzes, users can take them and get scored instantly, and a leaderboard tracks top performers. Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **shadcn/ui** for a clean, responsive experience.

**Repository**: [Online Quiz Maker Repository](https://github.com/deepanshuSoni22/online-quiz-maker)

---

## 📚 Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Running Locally](#running-locally)  
4. [Project Structure](#project-structure)  
5. [Usage](#usage)  
6. [Contributing](#contributing)  
7. [License](#license)  
8. [Contact](#contact)  

---

## 🌟 Features

- **Quiz Creation**  
  Examiners can author quizzes with multiple-choice questions and designate correct answers.

- **Quiz Attempting**  
  Users take quizzes one question at a time, receive instant correctness feedback, and see a final score.

- **Leaderboard & Analytics**  
  Tracks top scorers, average score, and total attempts; filterable by quiz.

- **User  Authentication**  
  Simple demo login system for quiz creators (credentials below).

- **Responsive UI**  
  Clean, mobile-friendly interface built with Tailwind CSS and shadcn/ui components.

---

## ⚙️ Tech Stack

- **Vite** – Fast build tool and dev server with instant HMR.  
- **TypeScript** – Static typing for safer, self-documenting code.  
- **React** – Component-based UI library with React Router.  
- **shadcn/ui** – Accessible React component library styled with Tailwind.  
- **Tailwind CSS** – Utility-first framework for rapid styling.  
- **React Context API** – Global state for quizzes, users, and leaderboard.  
- **React Query** – Data fetching and caching patterns.  
- **React Hot-Toast** – Toast notifications for user feedback.  

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 14.x  
- **npm** (or **bun**) installed globally

### Installation

1. **Clone the repository**  
```
   git clone https://github.com/deepanshuSoni22/online-quiz-maker.git
   cd online-quiz-maker
```
2. **Install dependencies**
```
   npm install
   # or
   bun install
```

## 🏃‍♂️ Running Locally

### To start the development server, run:
```
   npm run dev
   # or
   bun dev
```

Open your browser to http://localhost:5173/ to view the app.

---

## 📁 Project Structure

```
online-quiz-maker/
├── public/                
│   └── index.html         # Static entry point
├── src/
│   ├── components/        # Reusable UI components
│   ├── context/           # React Context for quizzes & auth
│   ├── pages/             # Route-driven pages (Home, Quiz, Leaderboard…)
│   ├── styles/            # Tailwind imports & globals
│   └── App.tsx            # Root component & router setup
├── .gitignore             # Ignored files (node_modules, .env, etc.)
├── package.json           # npm scripts & dependencies
├── bun.lockb              # bun lockfile OR package-lock.json
├── tailwind.config.ts     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project overview & instructions
```

---

## 📝 Usage

1. **Login**
   Go to **Login** and enter:
   ```
   Email: admin@quizcraft.com
   Password: password
   ```

2. **Create Quiz**
   - Navigate to Create Quiz
   - Fill in questions and options
   - Click Save

3. **Take Quiz**
   - Visit Quizzes
   - Select one, answer all questions, and review your score
  
4. **Leaderboard**
   - Click Leaderboard to view top performers and filter by quiz

---

# 📚 QuizCraft Platform - CODEBASE STRUCTURE

This document provides an overview of the QuizCraft platform's codebase structure and key components.

**1. ⚛️ App.tsx**
This is the root component of your React app. It sets up:
* React Query provider for data fetching and caching.
* QuizProvider: A React Context provider that shares quiz data and functionality throughout the app.
* TooltipProvider: Provides tooltip UI features.
* Two Toasters 🍞 for showing toast notifications.
* React Router's BrowserRouter and Routes for client-side navigation.
* The overall app layout (Layout) wraps your pages.
* Routes for all your pages like:
    * 🏠 home
    * 📝 quizzes list
    * ❓ quiz details
    * 🏆 leaderboard
    * ➕ create quiz
    * 🔑 login
    * 🚫 not found page

**2. 📐 Layout.tsx**
This component wraps your whole app visually with a header on top, a main content area, and a footer:
* The header is a reusable navigation bar (Header component).
* Children components are rendered in the main section.
* The footer shows copyright text with the current year.
* The layout ensures a minimum full height screen and a background color.

**3. 🗂️ Header.tsx**
The top navigation bar shows links and controls based on if a user is logged in or not.
* Shows site brand "QuizCraft" linked to homepage.
* Navigation links to:
    * 🏠 Home
    * 📝 Quizzes
    * 🏆 Leaderboard
    * ➕ Create Quiz (only if logged in)
* 🔑 Log In button if no user, or greeting and Log Out button if logged in.
* Uses the `useQuiz` hook from your context to get `currentUser` and `logout` function.

**4. 🧠 QuizContext.tsx**
This is the heart of your app’s state management, implemented as a React Context:
* Holds:
    * 📝 quizzes
    * ✅ quiz attempts
    * 👤 current user
    * functions to manipulate the state
* Functions:
    * `addQuiz`: To add new quizzes.
    * `addQuizAttempt`: To add attempt records when users take quizzes.
    * `login` and `logout`: For simple login logic (demo-only right now).
    * `getQuizById`: Find a quiz by ID.
    * `getLeaderboard`: Returns sorted list of quiz attempts by score percentage.
* Sample data for quizzes, attempts, and users is hardcoded here.
* `useToast` is used to trigger toast notifications when:
    * 📝 quizzes are created
    * 👤 user logs in or out
    * 🔑 login errors occur

**5. 📃 QuizzesPage.tsx**
Shows a searchable list of all available quizzes.
* Search works by filtering quizzes based on the user query against quiz title or description.
* Shows the filtered quizzes with `QuizCard` components.
* Displays a message if no quizzes match the search.

**6. 🏷️ QuizCard.tsx**
Displays summary info about a quiz:
* title
* description
* number of questions
* creation date
* Contains a "Take Quiz" button that navigates to the quiz detail page for that quiz.

**7. ❓ QuizDetailPage.tsx**
Main page where a user takes a quiz.
* Before starting, it shows quiz details with a "Start Quiz" button.
* Once started, it displays one question at a time using `QuizQuestion`.
* Tracks current question index and score state.
* After all questions are answered, shows the result with `QuizResult`.
* Allows retrying the quiz.

**8. 🤔 QuizQuestion.tsx**
Displays a single multiple-choice question.
* Lets user select one option.
* Submit button checks if selected answer is correct and calls the parent `onAnswer` callback.
* Shows feedback on whether answer is correct or wrong, highlighting the correct answer.

**9. ✅ QuizResult.tsx**
Shows the user's final score with customized messages based on percentage.
* Buttons to:
    * retry the quiz
    * see more quizzes
    * view leaderboard

**10. 🏆 LeaderboardPage.tsx**
Displays a leaderboard page with statistics:
* total attempts
* average score
* top score
* Shows filter buttons to view all or quizzes filtered by quiz ID.
* Displays attempts in `LeaderboardTable` with ranks and color-coded badges for top 3.

**11. 📊 LeaderboardTable.tsx**
Renders a table of quiz attempts, showing:
* rank
* user
* quiz
* score
* percentage
* date
* Highlights top 3 ranks with colored badges.

**12. 🔑 LoginPage.tsx**
Simple login form with email and password.
* Uses the `login` function from context; demo login only works for `admin@quizcraft.com` and `password`.
* On success, redirects to quiz creation page.
* Shows demo credentials below the form.

**13. ✍️ QuestionForm.tsx**
A UI form component for creating a new quiz question.
* Let’s user enter:
    * question text
    * four answer options
* Allows selection of the correct option button.
* Calls `onAddQuestion` callback with the entered data on submission.

**14. 🎨 UI Components**
You use the `shadcn/ui` library and Tailwind CSS for reusable UI components:
* Buttons
* Inputs
* Cards
* Toasts
* Labels
* Tables
* and more
* Consistent colors, hover states, focus states
* Responsive and clean styling

**Summary**
This codebase supports an interactive quiz platform with:
* A full quiz lifecycle (creation, taking, scoring).
* User authentication with simple login.
* Searchable quizzes and leaderboard.
* Toast notifications for user feedback.
* Clean UI with shadcn components and Tailwind CSS.
* Centralized state management via React Context for quizzes and user state.
