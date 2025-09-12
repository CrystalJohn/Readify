import { NextResponse } from "next/server";
import { prisma } from "@/app/server/db/client";

// GET /api/users → lấy toàn bộ users (kèm books)
export async function GET(req: Request) {
  try {
    const users = await prisma.user.findMany({
      include: { books: true },
    });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

// POST /api/users → tạo user mới
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const newUser = await prisma.user.create({
      data: { email, name },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}
