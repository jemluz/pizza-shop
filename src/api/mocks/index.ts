import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { signInMock } from './sign-in.mock'

// only when enableMSW is called, MSW will replace API for intercept the requests
// and that bahavior (call enableMSW) only will happen when tests are running

// need to add mode variable and it should be one of test, production or developmt values
export const worker = setupWorker(signInMock)

export async function enableMSW() {
  // if mode = test, nothing happens
  if (env.MODE !== 'test') {
    return
  }

  // if not, turn up the MSW
  await worker.start()
}
