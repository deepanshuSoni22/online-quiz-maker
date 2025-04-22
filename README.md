# online-quiz-maker

An interactive online quiz platform where examiners can create multiple‑choice quizzes, users can take them and get scored instantly, and a leaderboard tracks top performers. Built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui for a clean, responsive experience.

Repository: [https://github.com/deepanshuSoni22/online-quiz-maker](https://github.com/deepanshuSoni22/online-quiz-maker.git)

---

## Table of Contents

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

## Features

- **Quiz Creation**  
  Examiners can author quizzes with multiple‑choice questions and designate correct answers.

- **Quiz Attempting**  
  Users take quizzes one question at a time, receive instant correctness feedback, and see a final score.

- **Leaderboard & Analytics**  
  Tracks top scorers, average score, and total attempts; filterable by quiz.

- **User Authentication**  
  Simple demo login system for quiz creators (credentials below).

- **Responsive UI**  
  Clean, mobile‑friendly interface built with Tailwind CSS and shadcn/ui components.

---

## Tech Stack

- **Vite** – Fast build tool and dev server with instant HMR.  
- **TypeScript** – Static typing for safer, self‑documenting code.  
- **React** – Component‑based UI library with React Router.  
- **shadcn/ui** – Accessible React component library styled with Tailwind.  
- **Tailwind CSS** – Utility‑first framework for rapid styling.  
- **React Context API** – Global state for quizzes, users, and leaderboard.  
- **React Query** – Data fetching and caching patterns.  
- **React Hot‑Toast** – Toast notifications for user feedback.  

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 14.x  
- **npm** (or **bun**) installed globally

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/deepanshuSoni22/online-quiz-maker.git
   cd online-quiz-maker
## Summary

This response presents ready-to-use Markdown syntax for each section of your README, leveraging fenced code blocks (```bash```) for commands citeturn0search1turn0search6, triple backticks for directory trees citeturn0search2, and standard list formatting with asterisks or dashes citeturn0search4turn0search17. Each code or tree snippet is wrapped appropriately to render correctly on GitHub citeturn0search8, and list items follow the recommended conventions for unnumbered and numbered lists citeturn0search17.

---

## Install dependencies

Use a fenced code block with a language hint (`bash`) to display shell commands citeturn0search6:

```bash
npm install
# or
bun install
```

---

## Running Locally

Wrap your development commands in a similar fenced block citeturn0search1turn0search6:

```bash
npm run dev
# or
bun dev
```

_Open your browser to `http://localhost:5173/` to view the app._

---

## Project Structure

Embed your directory tree inside a fenced code block. Here we use plain text to preserve formatting citeturn0search2:

```text
online-quiz-maker/
├── public/                
│   └── index.html         # Static entry point
├── src/
│   ├── components/        # Reusable UI components
│   ├── context/           # React Context for quizzes & auth
│   ├── pages/             # Route‑driven pages (Home, Quiz, Leaderboard…)
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

## Usage

Use nested lists and plain text to describe each step. Unordered lists can use either `*` or `-` citeturn0search11:

1. **Login**  
   Go to **Login** and enter:  
   ```text
   Email: admin@quizcraft.com  
   Password: password
   ```
2. **Create Quiz**  
   - Navigate to **Create Quiz**  
   - Fill in questions and options  
   - Click **Save**
3. **Take Quiz**  
   - Visit **Quizzes**  
   - Select one, answer all questions, and review your score  
4. **Leaderboard**  
   - Click **Leaderboard** to view top performers and filter by quiz  

---

## Contributing

Outline contribution steps in a numbered list. In Markdown, you can start every item with `1.` and it will auto-number citeturn0search12:

```markdown
1. Fork this repo  
2. Create a branch: `git checkout -b feature/your-feature`  
3. Commit your changes: `git commit -m "feat: add your feature"`  
4. Push to your branch: `git push origin feature/your-feature`  
5. Open a Pull Request  

Ensure code is well‑formatted and tests (if any) pass.
```

---

## License

Describe the license and link to the file. Use inline links citeturn0search3:

```markdown
This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
```

---

## Contact

Provide contact info as plain text or as links. For GitHub links, use standard link syntax citeturn0search18:

```markdown
- **Author**: Deepanshu Soni
- **Email**: deepanshusoni022@gmail.com 
- **GitHub**: [deepanshuSoni22/online-quiz-maker](https://github.com/deepanshuSoni22/online-quiz-maker)
```

---


