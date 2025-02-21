import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './server/database/schema.ts',
  driver: 'pg',
  out: './server/database/migrations',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || 'postgres://fb_landing:umaEgCllMcK1yx9@fb-landing-db.flycast:5432/fb_landing?sslmode=disable'!,
  },
})
