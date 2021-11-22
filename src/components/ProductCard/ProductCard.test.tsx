import React from 'react'
import { render } from '@testing-library/react'

import * as nextRouter from 'next/router'
import ProductCard from '@/components/ProductCard'

import { MockAPISearchResponse } from '../../__mocks__'

// Mock useRouter in components that use it
;(nextRouter.useRouter as any) = jest
  .fn()
  .mockImplementation(() => ({ pathname: '/' }))

describe('ProductCard Component', () => {
  it('should display one item', () => {
    const { queryAllByTestId } = render(
      <ProductCard product={MockAPISearchResponse.items[0]} />
    )

    expect(queryAllByTestId('product')).toHaveLength(1)
  })
})
