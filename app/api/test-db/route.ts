import { NextResponse } from "next/server";
import { prisma } from "@/app/server/db/client";

export async function GET() {
  try {
    const authors = await prisma.author.findMany();
    return NextResponse.json(authors);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}
