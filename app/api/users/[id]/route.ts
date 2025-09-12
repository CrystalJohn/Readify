import { NextResponse } from "next/server";
import { prisma } from "@/app/server/db/client";

// GET /api/users/[id] → lấy user theo id
export async function GET(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: { books: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}

// PUT /api/users/[id] → update user
export async function PUT(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  try {
    const body = await req.json();
    const { email, name } = body;

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { email, name },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

// DELETE /api/users/[id] → xóa user
export async function DELETE(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
