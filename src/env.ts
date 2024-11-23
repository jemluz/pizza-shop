import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
})

// validation of env variables from .env.local = called with import.meta.env
export const env = envSchema.parse(import.meta.env)