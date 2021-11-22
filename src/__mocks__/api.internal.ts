import { ISearchResponse } from '../interfaces'

export const MockAPISearchResponse: ISearchResponse = {
  author: {
    name: 'Rafael',
    lastname: 'Cruz'
  },
  categories: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
  items: [
    {
      id: 'MLA924305475',
      title: 'Apple iPhone 11 (128 Gb) - Negro',
      price: {
        currency: '$',
        amount: 181187,
        decimals: 2
      },
      picture:
        'https://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg',
      condition: 'new',
      free_shipping: true,
      state_name: 'Capital Federal'
    },
    {
      id: 'MLA1103434316',
      title: 'Apple iPhone SE (2da Generación) 128 Gb - Blanco',
      price: {
        currency: '$',
        amount: 132331,
        decimals: 2
      },
      picture:
        'https://http2.mlstatic.com/D_963630-MLA46552310340_062021-I.jpg',
      condition: 'new',
      free_shipping: true,
      state_name: 'Misiones'
    },
    {
      id: 'MLA901420435',
      title: 'Apple iPhone 11 (64 Gb) - Blanco',
      price: {
        currency: '$',
        amount: 174999,
        decimals: 2
      },
      picture:
        'https://http2.mlstatic.com/D_809326-MLA46115014340_052021-I.jpg',
      condition: 'new',
      free_shipping: true,
      state_name: 'Capital Federal'
    },
    {
      id: 'MLA930843789',
      title: 'Apple iPhone 12 (256 Gb) - Blanco',
      price: {
        currency: '$',
        amount: 289999,
        decimals: 2
      },
      picture:
        'https://http2.mlstatic.com/D_884510-MLA45716388967_042021-I.jpg',
      condition: 'new',
      free_shipping: true,
      state_name: 'Capital Federal'
    }
  ]
}
