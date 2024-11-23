import axios from 'axios'

// import env variables that already validated
import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

// force a delay on every request (to see skeleton loading working)
if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return config
  })
}
