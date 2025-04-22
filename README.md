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

