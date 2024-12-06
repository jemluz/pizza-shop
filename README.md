# Pizza Shop

4/7 projects of Ignite React specialization by @rocketseat-education : An intermediate react project focusing on API integration with backend using React Query, unit testing and more

Available at (Vercel):

![image](https://github.com/user-attachments/assets/93e60d7d-9409-49e7-93d2-de191adcba1e)
![image](https://github.com/user-attachments/assets/ec17ad64-ea7f-4e87-a2c1-a197f9fdf0b2)

## Requirements
- **Orders Listing Page**
  - Change profile
  - **Filters**: Users should be able to filter by "order id", "customer name" or "status"
  - **Clear filters**: Users should be able to clear/reset all filters
  - **Orders table**: Users should be able to view orders list (id, create time, status, customer, total)
  - **Orders actions**: Users should be able to change orders status (pending, canceled, processing, delivering, delivered)
  - **Cancel order**: Users should be able to cancel an order since as long as it does have the status "pending" or "process" only
  - **Table pagination**: Users should be able to navigate between pages.
  - **Order details**: Users should be able to view order details.
- **Dashboard Page**
  - **Data cards**: Users should be able to view cards with their bussiness metrics.
  - **Data charts**: Users should be able to view charts with their bussiness metrics.
  - **Period filter**: Users should be able to filter dashboard results by periodo with a datepicker.
- **Sign in and Sign out**: Users should be able to login and logout of their own account.
- **Sign up**: Users should be able to create an account.
- **Not found page**: Users should be able to see not found page when tries to access an unexistent page.

## Technologies & Libraries used on this project
- [Vite](https://vitejs.dev/) Frontend environment
- [React Hook Form](https://react-hook-form.com/) Forms support
- [Zod](https://zod.dev/) Form validation
- [Shadcn UI](https://ui.shadcn.com/) Ready ui components for your interface
- [Radix UI](https://www.radix-ui.com/) Shadcn use radix components
- [React Query]() Fetching, caching, synchronizing and updating server state
- [Axios](https://axios-http.com/ptbr/)
- [Lucide](https://lucide.dev/) Icons library
- [Recharts](https://recharts.org/en-US/) Charts 
- [Sonner](https://sonner.emilkowal.ski/) Toasts 
- [Tailwind](https://tailwindcss.com/) Shadcn use tailwind to style components
- [PlayWright](https://playwright.dev/) E2E tests 
- [Testing library](https://testing-library.com/) Unit testing
- [ESLint](https://eslint.org/) Code quality assurance
- [Mock Service Worker](https://mswjs.io/) API testing simulator
- [Vitest](https://vitest.dev/) JS/TS testing
- [date-fns](https://date-fns.org/) Utility library/date formatting

## Issues and Discussions

- ### [Pages and components](https://github.com/jemluz/pizza-shop/issues/2)
  - Shadcn theme customization
  - Adding Toast
  - Understanding theme context
  - Lists: filters
  - Lists: pagination
  - Chats with rechart library

- ### [API Connection](https://github.com/jemluz/pizza-shop/issues/4)
  - Run API locally
  - Setup API client
  - HTTP state
  - Optimistic interface
  - As child trick
    
- ### [Unit tests](https://github.com/jemluz/pizza-shop/issues/7)
  - Unit test setup
  - Testing overview
  - Spies
  - Wrappers
  - MemoryRouter
  - Main attributes of MemoryRouter
  - `data-*` attributes & tests with `.dataset`
  - Using "as" in tests
  
- ### [Mocks](https://github.com/jemluz/pizza-shop/issues/8)
  - Mocking Service Worker (MSW)
  - How msw works
    
- ### [End to End tests (e2e)](https://github.com/jemluz/pizza-shop/issues/9)
  - Playwright lib for end to end
  - Setup Playwright
  - Timeout
    
