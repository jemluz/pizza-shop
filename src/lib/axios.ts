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
    // generate random intervals between 1sec and 3sec
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    )

    return config
  })
}
