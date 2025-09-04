// This file exports TypeScript types and interfaces used throughout the application.

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'reader';
}

export interface Book {
    id: string;
    title: string;
    authorId: string;
    pages: number;
    progress: number; // percentage of reading progress
    createdAt: Date;
    updatedAt: Date;
}

export interface Author {
    id: string;
    name: string;
    bio?: string;
    books: Book[];
}

export interface ReadingGoal {
    userId: string;
    goalType: 'books' | 'pages';
    target: number;
    current: number;
}

export interface ReadingProgress {
    userId: string;
    bookId: string;
    progress: number; // percentage of reading progress
    date: Date;
}