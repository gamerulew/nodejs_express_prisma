/*
  Warnings:

  - You are about to drop the `_authoritytouser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_authoritytouser` DROP FOREIGN KEY `_authoritytouser_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_authoritytouser` DROP FOREIGN KEY `_authoritytouser_ibfk_2`;

-- DropTable
DROP TABLE `_authoritytouser`;

-- CreateTable
CREATE TABLE `user_authorities` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `authorityId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_authorities_userId_key`(`userId`),
    UNIQUE INDEX `user_authorities_authorityId_key`(`authorityId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_authorities` ADD CONSTRAINT `user_authorities_authorityId_fkey` FOREIGN KEY (`authorityId`) REFERENCES `authorities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_authorities` ADD CONSTRAINT `user_authorities_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
