import { NextResponse } from 'next/server'; // NextResponse từ next.js để tạo http response (JSON, status code)
import { prisma } from '@/app/server/db/client';

// GET /api/books
export async function GET() {
    try {
        const books = await prisma.book.findMany({
            include: { author: true, user: true },
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(books);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 });
    }
}

// POST dùng để tạo sách mơi
export async function POST(req: Request) {
    try {
        // tạo sách mới từ dữ liệu JSON trong body request
        const body = await req.json();
        const { title, authorId, pages, userId } = body;
        // check authorId và title có exist không?
        if (!authorId || !title) {
            return NextResponse.json({ error: 'Author ID and title are required' }, { status: 400 });
        }
    const newBook = await prisma.book.create({
        data: {
            title,
            authorId,
            pages,
            userId,
        },
    });
    return NextResponse.json(newBook, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create book' }, { status: 500 });
    }
}
