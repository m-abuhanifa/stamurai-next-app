-- CreateEnum
CREATE TYPE "Status" AS ENUM ('To_Do', 'In_Progress', 'Completed');

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "Status" NOT NULL DEFAULT 'In_Progress',

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
