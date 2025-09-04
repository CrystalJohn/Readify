import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// GET /api/authors
export async function GET() {
    const authors = await prisma.author.findMany();
    return NextResponse.json(authors);
}

// POST /api/authors
export async function POST(request: Request) {
    const { name, bio } = await request.json();
    const newAuthor = await prisma.author.create({
        data: {
            name,
            bio,
        },
    });
    return NextResponse.json(newAuthor, { status: 201 });
}

// PUT /api/authors/:id
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const { name, bio } = await request.json();
    const updatedAuthor = await prisma.author.update({
        where: { id },
        data: { name, bio },
    });
    return NextResponse.json(updatedAuthor);
}

// DELETE /api/authors/:id
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    await prisma.author.delete({
        where: { id },
    });
    return NextResponse.json({ message: 'Author deleted' });
}