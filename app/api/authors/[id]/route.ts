import { NextResponse } from "next/server";
import { prisma } from "@/app/server/db/client";

// GET /api/authors/[id] → lấy author theo id
export async function GET(req: Request, { params }: { params: { id: string } }) {
    // sử dụng destructuring để lấy id từ params
  try {
    const author = await prisma.author.findUnique({
      where: { id: Number(params.id) },
      include: { books: true },
    });

    if (!author) {
      return NextResponse.json({ error: "Author not found" }, { status: 404 });
    }

    return NextResponse.json(author, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch author" }, { status: 500 });
  }
}

// PUT /api/authors/[id] → update author
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const { name } = body;

    const updatedAuthor = await prisma.author.update({
      where: { id: Number(params.id) },
      data: { name },
    });

    return NextResponse.json(updatedAuthor, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update author" }, { status: 500 });
  }
}

// DELETE /api/authors/[id] → xóa author
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.author.delete({
      where: { id: Number(params.id) },
    });

    return NextResponse.json({ message: "Author deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete author" }, { status: 500 });
  }
}
