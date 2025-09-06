// import type { Config } from "drizzle-kit";

// export default {
//     schema: "./src/lib/schema.ts",
//     out: "./drizzle",
//     driver: "pg",
//     dbCredentials: {
//         url: process.env.DATABASE_URL!,
//     },
//     dialect: "postgresql"
// } satisfies Config;
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/lib/schema.ts", // adjust if your schema path differs
    out: "./drizzle", // folder where migrations will be saved
    // Use the supported driver type ("pglite" or "aws-data-api")
    dbCredentials: {
        url: process.env.DATABASE_URL!, // e.g. postgres://user:pass@localhost:5432/dbname
    },
    dialect: "postgresql"
});
