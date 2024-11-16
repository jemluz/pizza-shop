import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      {/* %s = dinamic specific page title */}
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
