-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" INTEGER,
    "price" REAL NOT NULL,
    "category" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "inStock" INTEGER
);
INSERT INTO "new_products" ("category", "code", "id", "inStock", "name", "price", "quantity") SELECT "category", "code", "id", "inStock", "name", "price", "quantity" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");
CREATE UNIQUE INDEX "products_code_key" ON "products"("code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
