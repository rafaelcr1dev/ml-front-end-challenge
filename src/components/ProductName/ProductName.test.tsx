import React from 'react'
import { render } from '@testing-library/react'
import * as nextRouter from 'next/router'
import ProductName from '@/components/ProductName'

describe('ProductName Component', () => {
  it('should have a children on component', () => {
    ;(nextRouter.useRouter as any) = jest
      .fn()
      .mockImplementation(() => ({ pathname: '/' }))

    const { getByText } = render(
      <ProductName title="">
        <div>Hello world</div>
      </ProductName>
    )
    expect(getByText(/Hello world/i)).toBeInTheDocument()
  })

  it('should have a children on component with attribute title', () => {
    ;(nextRouter.useRouter as any) = jest
      .fn()
      .mockImplementation(() => ({ pathname: '/' }))

    const { getByText } = render(
      <ProductName title="PS5">
        <div>Hello world</div>
      </ProductName>
    )
    expect(getByText(/PS5/i)).toBeInTheDocument()
    expect(getByText(/Hello world/i)).toBeInTheDocument()
  })

  it('should have a componentProductName is with the tag H2', () => {
    ;(nextRouter.useRouter as any) = jest
      .fn()
      .mockImplementation(() => ({ pathname: '/' }))

    const { container } = render(<ProductName title="" />)

    expect(
      container.querySelectorAll('h2[data-testid="product-name"]')
    ).toHaveLength(1)
  })

  it('should have a componentProductName is with the tag H1', () => {
    ;(nextRouter.useRouter as any) = jest
      .fn()
      .mockImplementation(() => ({ pathname: '/items/[id]' }))

    const { container } = render(<ProductName title="" />)

    expect(
      container.querySelectorAll('h1[data-testid="product-name"]')
    ).toHaveLength(1)
  })
})
