import { NextResponse } from "next/server";
import { prisma } from "@/app/server/db/client";

// GET dùng để lấy chi tiết sách theo id
export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const book = await prisma.book.findUnique({
            where: { id: Number(params.id) }, // ép kiểu từ ID từ string sang number
            include: { author: true, user: true },
        })
        if (!book) {
            return NextResponse.json({ error: "Book not found" }, { status: 404 });
        }
        return NextResponse.json(book);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch book" }, { status: 500 });
    }
}

// PUT dùng để cập nhật sách theo id
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const body = await req.json(); // lấy dữ liệu JSON từ body request để cập nhật sách
        const { title, pages, authorId, userId } = body;
        const updatedBook = await prisma.book.update({
            where: { id: Number(params.id) },
            data: { title, pages, authorId, userId },
        });
        return NextResponse.json(updatedBook);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update book" }, { status: 500 });
    }
}

// DELETE dùng để xóa sách theo id
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        await prisma.book.delete({
            where: { id: Number(params.id) } 
        })
        if (Number.isNaN(params.id)) {
            return NextResponse.json({ error: "Invalid book ID" }), { status: 400 };
        }
        return NextResponse.json({ message: "Book deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete book" }, { status: 500 });
    }
}