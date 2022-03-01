/*
  Warnings:

  - Made the column `login` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `login` VARCHAR(191) NOT NULL;
