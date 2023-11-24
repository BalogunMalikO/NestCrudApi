/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `trivia` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "trivia_id_key" ON "trivia"("id");
