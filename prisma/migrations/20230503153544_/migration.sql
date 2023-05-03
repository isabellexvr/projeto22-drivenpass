/*
  Warnings:

  - You are about to drop the column `label` on the `credentials` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `credentials` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `credentials` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "credentials_label_key";

-- AlterTable
ALTER TABLE "credentials" DROP COLUMN "label",
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "credentials_title_key" ON "credentials"("title");
