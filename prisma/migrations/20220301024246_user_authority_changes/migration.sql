/*
  Warnings:

  - The primary key for the `user_authorities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user_authorities` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,authorityRole]` on the table `user_authorities` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user_authorities` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`userId`, `authorityRole`);

-- CreateIndex
CREATE UNIQUE INDEX `user_authorities_userId_authorityRole_key` ON `user_authorities`(`userId`, `authorityRole`);
