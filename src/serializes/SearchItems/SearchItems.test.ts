import React from 'react'
import { serializeSearchItems } from './SearchItems'

import {
  MockAPIExternalSearchResponse,
  MockAPIExternalCurrencyDetailsResponse
} from '../../__mocks__'

describe('ProductList Component', () => {
  it('should serialized a searchItemsData', () => {
    const data = serializeSearchItems(
      MockAPIExternalSearchResponse.results,
      MockAPIExternalCurrencyDetailsResponse
    )

    expect(data).toEqual([
      {
        condition: 'new',
        free_shipping: true,
        id: 'MLA930844887',
        picture:
          'https://http2.mlstatic.com/D_637846-MLA46081340098_052021-I.jpg',
        price: { amount: 297029, currency: '$', decimals: 2 },
        state_name: 'Capital Federal',
        title: 'Apple iPhone 12 Pro (128 Gb) - Grafito'
      }
    ])
  })
})
