import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '~/server/database/schema'

export * as tables from '~/server/database/schema'

const config = useRuntimeConfig()
console.log("runtime config", config.databaseUrl)

const client = postgres(config.databaseUrl)
export const db = drizzle(client, { schema })
