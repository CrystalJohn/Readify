import { NextResponse } from "next/server";
import { prisma } from "@/app/server/db/client";

// GET /api/authors
// lấy toàn bộ authors kèm sách
export async function GET() {
  try {
    const authors = await prisma.author.findMany({
      include: { books: true },
    });
    return NextResponse.json(authors, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch authors" },
      { status: 500 }
    );
  }
}

// POST /api/authors
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name } = body;
        if (!name) {
            return NextResponse.json(
                { error: "Author name is required" },
                { status: 400 }
            );
        }
        const newAuthor = await prisma.author.create({
            data: { name },
        });
        return NextResponse.json(newAuthor, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create author" }, { status: 500 });
    }
}