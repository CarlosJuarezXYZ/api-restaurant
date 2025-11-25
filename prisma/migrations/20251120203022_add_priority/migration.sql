/*
  Warnings:

  - Added the required column `priority` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `priority` INTEGER NOT NULL;
