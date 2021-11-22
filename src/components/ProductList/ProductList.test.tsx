import React from 'react'
import { render } from '@testing-library/react'

import * as nextRouter from 'next/router'
import ProductList from '@/components/ProductList'

import { MockAPISearchResponse } from '../../__mocks__'
;(nextRouter.useRouter as any) = jest
  .fn()
  .mockImplementation(() => ({ pathname: '/' }))

describe('ProductList Component', () => {
  it('should display four item', () => {
    const { queryAllByTestId } = render(
      <ProductList products={MockAPISearchResponse.items} />
    )

    expect(queryAllByTestId('product')).toHaveLength(4)
  })
})
