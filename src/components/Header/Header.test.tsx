import React from 'react'
import { render } from '@testing-library/react'
import * as nextRouter from 'next/router'
import Header from '@/components/Header'

describe('Header Component', () => {
  it('should have a logo with link and form on component', () => {
    ;(nextRouter.useRouter as any) = jest
      .fn()
      .mockImplementation(() => ({ pathname: '/' }))

    const { container } = render(<Header />)
    const selectorLink = 'a[title="Mercado Libre"]'
    const selectorForm = 'form'

    expect(container.querySelectorAll(selectorLink)).toHaveLength(1)
    expect(container.querySelectorAll(selectorForm)).toHaveLength(1)
  })

  it('should have a logo is with the tag H1', () => {
    ;(nextRouter.useRouter as any) = jest
      .fn()
      .mockImplementation(() => ({ pathname: '/' }))

    const { container } = render(<Header />)

    expect(container.querySelectorAll('h1[data-testid="logo"]')).toHaveLength(1)
  })

  it('should have a logo is with the tag DIV', () => {
    ;(nextRouter.useRouter as any) = jest
      .fn()
      .mockImplementation(() => ({ pathname: '/items/[id]' }))

    const { container } = render(<Header />)

    expect(container.querySelectorAll('div[data-testid="logo"]')).toHaveLength(
      1
    )
  })
})
