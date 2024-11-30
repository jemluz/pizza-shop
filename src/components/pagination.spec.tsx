import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

import { Pagination } from './pagination'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    // if onPageChangeCallback is a global spie, the test results could be
    // corrupted, bcs once is called in one test, other tests can verify as called even before call it again

    // so in this case we need to reset the spie "data/memory" between each test with mockClear()
    onPageChangeCallback.mockClear()
  })

  it('should be able to navigate to the previous page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    await user.click(nextPageButton)
    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })

  it('should be able to navigate to the first page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    await user.click(nextPageButton)
    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
  })

  it('should be able to navigate to the last page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    await user.click(nextPageButton)
    expect(onPageChangeCallback).toHaveBeenCalledWith(19)
  })
})
