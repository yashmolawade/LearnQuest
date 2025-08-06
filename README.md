# LearnQuest

## Introduction

**LearnQuest** is an interactive quiz platform designed to help users test and improve their knowledge across various topics. The application provides AI-driven quiz suggestions based on user performance, a leaderboard, achievements, and a seamless authentication experience. It leverages Firebase for authentication and user data, and the Open Trivia Database (OpenTDB) API for dynamic quiz content.

## Project Type

Frontend

## Deployed App

- **Frontend:** https://deployed-site.whatever
- **Backend:** N/A (uses Firebase and external APIs)
- **Database:** Firebase Firestore

## Directory Structure

```
LearnQuest/
├─ CSS/
│    ├─ login.css
│    ├─ main.css
│    ├─ nav.css
│    └─ signup.css
├─ HTML/
│    ├─ achivement.html
│    ├─ aisuggestions.html
│    ├─ leaderboard.html
│    ├─ login.html
│    ├─ quiz.html
│    ├─ signup.html
│    └─ startquiz.html
├─ IMG/
│    ├─ login_signup_background.png
│    ├─ logo.png
│    ├─ main_keyboard_background.png
│    └─ quiz_background.png
├─ JavaScript/
│    ├─ auth.js
│    ├─ dash2.js
│    ├─ dashboard.js
│    └─ firbase-config.js
├─ videos/
│    ├─ code_overview.mp4
│    └─ project_overview.mp4
├─ index.html
└─ README.md
```

## Video Walkthrough of the Project

[▶️ Watch Project Walkthrough](videos/project_overview.mp4)

## Video Walkthrough of the Codebase

[▶️ Watch Codebase Walkthrough](videos/code_overview.mp4)

## Features

- User authentication (login/signup) with Firebase
- AI-driven quiz suggestions based on user performance
- Dynamic quizzes from OpenTDB API
- Leaderboard and achievements tracking
- Responsive, modern UI
- Personalized dashboard and progress tracking

## Design Decisions or Assumptions

- User quiz history and progress are stored in Firebase Firestore.
- Quiz content is fetched live from the OpenTDB API, ensuring up-to-date and varied questions.
- The app is designed as a static frontend, with no custom backend server.
- All user data is secured via Firebase authentication and Firestore security rules.

## Installation & Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd LearnQuest
   ```
2. **Firebase Setup:**

   - Add your Firebase project configuration to `JavaScript/firbase-config.js`.
   - Ensure Firestore and Authentication are enabled in your Firebase console.

3. **Run Locally:**

   - Open `index.html` in your browser.
   - For best results, use a local server (e.g., VSCode Live Server extension).

4. **(Optional) Deploy:**
   - Deploy to Firebase Hosting or any static site host.

## Usage

- Sign up or log in to access personalized features.
- Navigate to "AI Review" for quiz suggestions.
- Take quizzes, view your progress, and climb the leaderboard!

_Include screenshots as necessary._

## Credentials

- Demo user:  
  **Email:** demo@learnquest.com  
  **Password:** Demo1234

## APIs Used

- [Open Trivia Database (OpenTDB)](https://opentdb.com/api_config.php) — for quiz questions and categories.
- [Firebase Authentication & Firestore](https://firebase.google.com/) — for user management and data storage.

## API Endpoints

_No custom backend. All quiz data is fetched from:_

- `https://opentdb.com/api.php?amount={amount}&category={category}&difficulty={difficulty}&type=multiple`
- `https://opentdb.com/api_category.php` (for categories)

## Technology Stack

- **HTML5, CSS3, JavaScript**
- **Firebase** (Authentication, Firestore)
- **OpenTDB API**
