/*
  Warnings:

  - You are about to drop the column `page` on the `Quiz` table. All the data in the column will be lost.
  - Added the required column `correct` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pageName` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "page",
ADD COLUMN     "correct" BOOLEAN NOT NULL,
ADD COLUMN     "pageName" TEXT NOT NULL;
