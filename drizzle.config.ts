import type { Config } from "drizzle-kit";

export default {
    schema: "./src/lib/schema.ts",
    out: "./drizzle",
    driver: "pglite",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    dialect: "postgresql"
} satisfies Config;