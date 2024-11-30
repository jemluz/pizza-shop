import { api } from '@/lib/axios'

export interface UpdateProfileBody {
  name: string
  description: string | null
}

export async function updateProfile({ description, name }: UpdateProfileBody) {
  // use this to test otmist interface
  // await new Promise((_, reject) => {
  //   setTimeout(reject, 1000)
  // })

  await api.put('/profile', { name, description })
}
