# 📋 Readify Project Backlog

## Epic 1: Database & ORM Setup

- Task 1.1: Setup Prisma + PostgreSQL connection (schema.prisma, .env).
- Task 1.2: Generate Prisma Client (npx prisma generate).
- Task 1.3: Thiết kế DB schema (User, Book, Author với quan hệ 1–N).
- Task 1.4: Migrate schema vào DB (npx prisma migrate dev).
- Task 1.5: Tạo Prisma Client singleton (src/server/db/client.ts).

---

## Epic 2: Seed & Mock Data

- Task 2.1: Tạo file prisma/seed.ts.
- Task 2.2: Thêm seed cho User, Author, Book với dữ liệu mẫu.
- Task 2.3: Chạy seed (npx prisma db seed) và verify bằng Prisma Studio.

---

## Epic 3: CRUD API

### Book

- Task 3.1: GET /api/books → lấy list books.
- Task 3.2: POST /api/books → tạo book mới.
- Task 3.3: GET /api/books/[id] → lấy book theo id.
- Task 3.4: PUT /api/books/[id] → update book.
- Task 3.5: DELETE /api/books/[id] → xóa book.

### Author

- Task 3.6: GET /api/authors → lấy list authors.
- Task 3.7: POST /api/authors → tạo author.
- Task 3.8: GET /api/authors/[id] → lấy author theo id (+ include books).
- Task 3.9: PUT /api/authors/[id] → update author.
- Task 3.10: DELETE /api/authors/[id] → xóa author.

### User

- Task 3.11: GET /api/users → lấy list users.
- Task 3.12: POST /api/users → tạo user.
- Task 3.13: GET /api/users/[id] → lấy user theo id (+ include books).
- Task 3.14: PUT /api/users/[id] → update user.
- Task 3.15: DELETE /api/users/[id] → xóa user.

---

## Epic 4: API Testing & Error Handling

- Task 4.1: Test tất cả endpoints bằng Thunder Client / Postman.
- Task 4.2: Thêm validate input (vd: title required, authorId phải tồn tại).
- Task 4.3: Trả về status code chuẩn (200, 201, 400, 404, 500).
- Task 4.4: Viết file docs/api.md mô tả tất cả endpoints.

---

## Epic 5: UI Basic (Phase 2 chuẩn bị)

- Task 5.1: Setup TailwindCSS.
- Task 5.2: Tạo UI page hiển thị list books (SSR fetch từ API).
- Task 5.3: Tạo UI form thêm Book (call API POST).
- Task 5.4: Tạo UI detail page cho Book.
- Task 5.5: Tạo UI update/delete Book.

---
