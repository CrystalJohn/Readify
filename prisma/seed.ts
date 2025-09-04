import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed users
    const user1 = await prisma.user.create({
        data: {
            email: 'user1@example.com',
            name: 'User One',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: 'user2@example.com',
            name: 'User Two',
        },
    });

    // Seed authors
    const author1 = await prisma.author.create({
        data: {
            name: 'Author One',
            bio: 'This is a bio for Author One.',
        },
    });

    const author2 = await prisma.author.create({
        data: {
            name: 'Author Two',
            bio: 'This is a bio for Author Two.',
        },
    });

    // Seed books
    const book1 = await prisma.book.create({
        data: {
            title: 'Book One',
            authorId: author1.id,
            description: 'Description for Book One.',
            publishedYear: 2021,
        },
    });

    const book2 = await prisma.book.create({
        data: {
            title: 'Book Two',
            authorId: author2.id,
            description: 'Description for Book Two.',
            publishedYear: 2022,
        },
    });

    console.log({ user1, user2, author1, author2, book1, book2 });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });