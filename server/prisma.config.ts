import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasources: {      // ✅ PLURAL (IMPORTANT)
    db: {
      url: process.env.DATABASE_URL!,
    },
  },
});
