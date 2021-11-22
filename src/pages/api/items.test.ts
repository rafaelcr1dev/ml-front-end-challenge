import { createMocks } from 'node-mocks-http'

import {
  MockAPIExternalSearchResponse,
  MockAPIExternalCategoriesResponse,
  MockAPIExternalCurrencyDetailsResponse
} from '../../__mocks__'

import apiSearchItems from './items'
import apiClient from '../../api'

describe('API Search', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
  })

  it('should returns a search items response', async () => {
    apiClient.getSearchItems = jest
      .fn()
      .mockImplementation(() => MockAPIExternalSearchResponse)
    apiClient.getCategories = jest
      .fn()
      .mockImplementation(() => MockAPIExternalCategoriesResponse)
    apiClient.getCurrencyInfos = jest
      .fn()
      .mockImplementation(() => MockAPIExternalCurrencyDetailsResponse)

    const { req, res } = createMocks({
      method: 'GET',
      query: {
        q: 'Iphone 13 Pro Max'
      }
    })

    await apiSearchItems(req, res)

    expect(res._getStatusCode()).toBe(200)

    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        author: { lastname: 'Cruz', name: 'Rafael' },
        categories: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
        items: [
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
        ]
      })
    )
  })

  it('should returns a search items response error when dont exists term', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        v: 'Iphone 13 Pro Max'
      }
    })

    await apiSearchItems(req, res)

    expect(res._getStatusCode()).toBe(400)
  })
})
