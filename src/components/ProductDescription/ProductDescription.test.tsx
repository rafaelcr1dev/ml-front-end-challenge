import React from 'react'
import { render } from '@testing-library/react'

import ProductDescription from '@/components/ProductDescription'

describe('ProductDescription Component', () => {
  it('should display a title and empty paragraph', () => {
    const description = ''
    const { queryByText, queryByTestId } = render(
      <ProductDescription description={description} />
    )

    expect(queryByText('Descripción del producto')).not.toBeNull()
    expect(queryByTestId('description')).toBeEmptyDOMElement()
  })
  it('should display a title and paragraph', () => {
    const description = 'Text'

    const { queryByText, queryByTestId } = render(
      <ProductDescription description={description} />
    )

    expect(queryByText('Descripción del producto')).not.toBeNull()
    expect(queryByTestId('description')).not.toBeEmptyDOMElement()
    expect(queryByTestId('description')?.innerHTML).toEqual('Text')
  })
})
