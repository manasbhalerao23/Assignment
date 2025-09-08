import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/lib/schema.ts", 
    out: "./drizzle", // folder where migrations will be saved
    dbCredentials: {
        url: process.env.DATABASE_URL!, // e.g. postgres://user:pass@localhost:5432/dbname
    },
    dialect: "postgresql"
});
