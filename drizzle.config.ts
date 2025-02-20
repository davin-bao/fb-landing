import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './server/database/schema.ts',
  driver: 'pg',
  out: './server/database/migrations',
  dbCredentials: {
    connectionString: process.env.NUXT_DATABASE_URL!,
  },
})
