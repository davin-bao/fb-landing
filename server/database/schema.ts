import { bigint, boolean, jsonb, pgTable, primaryKey, varchar } from 'drizzle-orm/pg-core'

export const user = pgTable('subscribe_user', {
  id: varchar('id').primaryKey(),
  email: varchar('email').notNull().unique(),
  name: varchar('name').notNull(),
})

export type User = typeof user.$inferSelect