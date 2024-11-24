import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import {
  getManagedRestaurant,
  GetManagedRestaurantResponse,
} from '@/api/get-managed-restaurant'
import { updateProfile } from '@/api/update-profile'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

// this code is responsible for update the cached name at header
// when update profile success= header name will updated too
// onSuccess receive the returned data , and request data
// first param -> data = the data received as res, unusefful in this case, so we write an "_"
// second param -> variables = the data that we send on req
// onSuccess(_, { description, name }) { // onSuccess = run when end the req with success
//   const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
//     'managed-restaurant',
//   ])
//   if (cached) {
//     queryClient.setQueryData<GetManagedRestaurantResponse>(
//       ['managed-restaurant'],
//       {
//         ...cached,
//         name,
//         description,
//       },
//     )
//   }

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().nullable(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

// Here, managed-restaurant req will not called again,
// bcs in AccountMenu component that req is already called before.
// So we use useQuery again to load cache from this req, this way we no need to use props to pass data between AccountMenu and StoreProfileDialog

export function StoreProfileDialog() {
  const queryClient = useQueryClient()

  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  function updateManagedRestaurantCache({
    name,
    description,
  }: StoreProfileSchema) {
    const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
      'managed-restaurant',
    ])

    // if already has some cached data
    if (cached) {
      // update the chache with new values
      queryClient.setQueryData<GetManagedRestaurantResponse>(
        ['managed-restaurant'],
        {
          ...cached,
          name,
          description,
        },
      )
    }

    // when use at onSuccess -> dont need to has return
    // when use at onMutate -> need to return cached so then pass it up to context
    return { cached }
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    // otmist interface
    // this code makes the same thing that commented code below
    // the difference is that header name will updated before success,
    // onMutate not receive data as onSuccess
    onMutate({ description, name }) {
      // onMuted = run when start the req
      const { cached } = updateManagedRestaurantCache({ description, name })

      // save the current cache and return it as previousProfile
      return { previousProfile: cached }
    },
    // and if happens any error, will undo the name update
    // onError = run when end the req with error
    // receive (error, variables, context)
    // first param -> error = error details
    // second param -> variables = the data that we send on req
    // third param -> conext = info that we can share between different parts of a mutation/query
    // the context will nest everything that will be returned from mutation/query methods
    // so when i return { previousProfile: cached } in onMutate, this automaticaly turns onError be able to see/work with that data through the context
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateManagedRestaurantCache(context.previousProfile)
      }
    },
    // you can use onSuccess (line 26 - 41) instead of onMutate + onError
    // onSuccess(_, { description, name }) { ... }// onSuccess = run when end the req with success
  })

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      })
      toast.success('Perfil atualizado com sucesso!')
    } catch {
      toast.error('Falha ao atualizar o perfil, tente novamente')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>

        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>

            <Input className="col-span-3" id="name" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>

            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="success" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
