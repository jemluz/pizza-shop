import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order.mock'
import { cancelOrderMock } from './cancel-order.mock'
import { deliverOrderMock } from './deliver-order.mock'
import { dispatchOrderMock } from './dispatch-order.mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period.mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount.mock'
import { getManagedRestaurantMock } from './get-managed-restaurant.mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount.mock'
import { getMonthRevenueMock } from './get-month-revenue.mock'
import { getOrdersMock } from './get-orders.mock'
import { getOrderDetailsMock } from './get-orders-details.mock'
import { getPopularProductsMock } from './get-popular-products.mock'
import { getProfileMock } from './get-profile.mock'
import { registerRestaurantMock } from './register-restaurant.mock'
import { signInMock } from './sign-in.mock'
import { updateProfileMock } from './update-profile.mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  cancelOrderMock,
  approveOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

// only when enableMSW is called, MSW will replace API for intercept the requests
// and that bahavior (call enableMSW) only will happen when tests are running

// need to add mode variable and it should be one of test, production or developmt values

export async function enableMSW() {
  // if mode = test, nothing happens
  if (env.MODE !== 'test') {
    return
  }

  // if not, turn up the MSW
  await worker.start()
}
