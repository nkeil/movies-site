/*
  Warnings:

  - You are about to drop the column `authorId` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `watcherId` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "watched" BOOLEAN NOT NULL DEFAULT false,
    "watcherId" INTEGER NOT NULL,
    CONSTRAINT "Movie_watcherId_fkey" FOREIGN KEY ("watcherId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Movie" ("content", "id", "title", "watched") SELECT "content", "id", "title", "watched" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
