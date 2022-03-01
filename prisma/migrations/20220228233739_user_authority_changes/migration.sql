/*
  Warnings:

  - The primary key for the `authorities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `authorities` table. All the data in the column will be lost.
  - You are about to drop the column `authorityId` on the `user_authorities` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[role]` on the table `authorities` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[authorityRole]` on the table `user_authorities` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorityRole` to the `user_authorities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_authorities` DROP FOREIGN KEY `user_authorities_authorityId_fkey`;

-- AlterTable
ALTER TABLE `authorities` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`role`);

-- AlterTable
ALTER TABLE `user_authorities` DROP COLUMN `authorityId`,
    ADD COLUMN `authorityRole` ENUM('ADMIN', 'USER') NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `authorities_role_key` ON `authorities`(`role`);

-- CreateIndex
CREATE UNIQUE INDEX `user_authorities_authorityRole_key` ON `user_authorities`(`authorityRole`);

-- AddForeignKey
ALTER TABLE `user_authorities` ADD CONSTRAINT `user_authorities_authorityRole_fkey` FOREIGN KEY (`authorityRole`) REFERENCES `authorities`(`role`) ON DELETE RESTRICT ON UPDATE CASCADE;
