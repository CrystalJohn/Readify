import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// GET /api/books
export async function GET() {
    const books = await prisma.book.findMany();
    return NextResponse.json(books);
}

// POST /api/books
export async function POST(request: Request) {
    const { title, authorId, pages, description } = await request.json();
    const newBook = await prisma.book.create({
        data: {
            title,
            authorId,
            pages,
            description,
        },
    });
    return NextResponse.json(newBook, { status: 201 });
}

// PUT /api/books/:id
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const { title, authorId, pages, description } = await request.json();
    const updatedBook = await prisma.book.update({
        where: { id: Number(id) },
        data: {
            title,
            authorId,
            pages,
            description,
        },
    });
    return NextResponse.json(updatedBook);
}

// DELETE /api/books/:id
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    await prisma.book.delete({
        where: { id: Number(id) },
    });
    return NextResponse.json({ message: 'Book deleted successfully' });
}