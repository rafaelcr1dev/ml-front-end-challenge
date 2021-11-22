import React from 'react'
import { render } from '@testing-library/react'

import { IPrice } from '../../interfaces'
import ProductPrice from '@/components/ProductPrice'

describe('ProductPrice Component', () => {
  const price: IPrice = {
    currency: '$',
    decimals: 2,
    amount: 0
  }

  it('should display correct price when input is 5106', () => {
    price.amount = 5106

    const { container, queryByTestId } = render(<ProductPrice price={price} />)

    expect(
      container
        .querySelector('span[data-testid="price-amount"]')
        ?.getAttribute('data-value')
    ).toEqual('$ 5.106')

    expect(queryByTestId('price-decimals')).toBeNull()
  })

  it('should display correct price when input is 5106.7', () => {
    price.amount = 5106.7

    const { container, queryByTestId } = render(<ProductPrice price={price} />)

    expect(
      container
        .querySelector('span[data-testid="price-amount"]')
        ?.getAttribute('data-value')
    ).toEqual('$ 5.106')

    expect(queryByTestId('price-decimals')).toHaveTextContent('70')
  })

  it('should display correct price when input is 5106.71', () => {
    price.amount = 5106.71
    const { container, queryByTestId } = render(<ProductPrice price={price} />)

    expect(
      container
        .querySelector('span[data-testid="price-amount"]')
        ?.getAttribute('data-value')
    ).toEqual('$ 5.106')

    expect(queryByTestId('price-decimals')).toHaveTextContent('71')
  })
})
