import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ---- Seed Authors ----
  const rowling = await prisma.author.upsert({
    where: { name: "J.K. Rowling" },
    update: {},
    create: { name: "J.K. Rowling" },
  });

  const martin = await prisma.author.upsert({
    where: { name: "George R.R. Martin" },
    update: {},
    create: { name: "George R.R. Martin" },
  });

  // ---- Seed Users ----
  const alice = await prisma.user.upsert({
    where: { email: "alice@example.com" },
    update: {},
    create: {
      email: "alice@example.com",
      name: "Alice",
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: "bob@example.com" },
    update: {},
    create: {
      email: "bob@example.com",
      name: "Bob",
    },
  });

  // ---- Seed Books ----
  await prisma.book.createMany({
    data: [
      {
        title: "Harry Potter and the Philosopher's Stone",
        pages: 223,
        progress: 0,
        authorId: rowling.id,
        userId: alice.id,
      },
      {
        title: "Harry Potter and the Chamber of Secrets",
        pages: 251,
        progress: 15,
        authorId: rowling.id,
        userId: alice.id,
      },
      {
        title: "A Game of Thrones",
        pages: 694,
        progress: 30,
        authorId: martin.id,
        userId: bob.id,
      },
      {
        title: "A Clash of Kings",
        pages: 768,
        progress: 0,
        authorId: martin.id,
        userId: bob.id,
      },
    ],
    skipDuplicates: true, // tránh insert trùng nếu chạy lại
  });
}

main()
  .then(async () => {
    console.log("✅ Database seeded with mock data!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seeding error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
