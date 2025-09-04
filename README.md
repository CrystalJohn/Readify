# Readify - Online Book Platform

Welcome to the Readify project! This is an online book platform designed to help users manage and track their reading progress. Below you will find an overview of the project, its features, and how to get started.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Readify aims to provide a modern web application that allows users to log their reading progress, set goals, and engage with a community of readers. The platform addresses common pain points faced by readers, such as tracking progress, motivation through streaks, and sharing achievements.

## Features

- Multiple ways to log reading progress (by chapter, finished books, pages read, or percentage).
- Daily reading streaks to motivate users.
- Audio support for listening to books by chapter or in full.
- Ability to take notes and highlight memorable quotes.
- Social sharing of reading achievements.
- User-friendly web interface optimized for both desktop and mobile.
- Personalized book recommendations based on user preferences and reading history.

## Tech Stack

- **Front-end:** React, Next.js 14, TypeScript, Tailwind CSS
- **Back-end:** Next.js API Routes, Prisma ORM, PostgreSQL (Supabase)
- **Authentication:** NextAuth (OAuth/Magic link)
- **Hosting:** Vercel
- **APIs:** Google Books API, Open Library, and more

## Getting Started

To get started with the Readify project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/readify.git
   ```

2. Navigate to the project directory:
   ```
   cd readify
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your environment variables by copying `.env.example` to `.env.local` and filling in the required values.

5. Run the development server:
   ```
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Contributing

We welcome contributions to the Readify project! If you have suggestions or improvements, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.