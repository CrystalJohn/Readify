// sử dụng pattern singleton để tối ưu hóa kết nối database
// singleton là 1 mẫu thiết kế đảm bảo chỉ có 1 instance trên toàn app
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Tạo và export Prisma Client instance
// Nếu đã có instance trong globalThis thì dùng lại, nếu chưa thì tạo mới với config logging: ghi log
export const prisma = globalForPrisma.prisma || new PrismaClient({
    log: ["query", "warn", "error"],
}); 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;