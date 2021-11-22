import React from 'react'
import { render } from '@testing-library/react'
import * as nextRouter from 'next/router'
import mockRouter from 'next-router-mock'
import SingleProduct from '@/components/SingleProduct'

import { MockAPISearchResponse } from '../../__mocks__'
;(nextRouter.useRouter as any) = jest
  .fn()
  .mockImplementation(() => ({ pathname: '/' }))

describe('SingleProduct Component', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/')
  })

  it('should rendered block SingleProduct', () => {
    const { queryAllByTestId } = render(
      <SingleProduct item={MockAPISearchResponse.items[0]} />
    )

    expect(queryAllByTestId('single-product')).toHaveLength(1)
  })

  it('should not rendered block SingleProduct', () => {
    const { queryAllByTestId } = render(<SingleProduct />)

    expect(queryAllByTestId('single-product')).toHaveLength(0)
  })

  it('should have condition new', () => {
    const item = MockAPISearchResponse.items[0]
    item.condition = 'new'
    const { queryByTestId } = render(<SingleProduct item={item} />)

    expect(queryByTestId('single-product').textContent).toContain('Nuevo')
  })

  it('should have condition different of new', () => {
    const item = MockAPISearchResponse.items[0]
    item.condition = 'old'
    const { queryByTestId } = render(<SingleProduct item={item} />)

    expect(queryByTestId('single-product').textContent).toContain('Usó')
  })

  it('should have description block', () => {
    const item = MockAPISearchResponse.items[0]
    item.description = 'Hello world'
    const { queryByTestId, queryAllByTestId } = render(
      <SingleProduct item={item} />
    )

    expect(queryAllByTestId('description')).toHaveLength(1)
    expect(queryByTestId('description').textContent).toContain('Hello world')
  })

  it('should have not description block', () => {
    const item = MockAPISearchResponse.items[0]
    item.description = ''
    const { queryAllByTestId } = render(<SingleProduct item={item} />)

    expect(queryAllByTestId('description')).toHaveLength(0)
  })
})
