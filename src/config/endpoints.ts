import { DOMAIN } from '../config/consts'

export const endpoints = {
  getCategories: (category_id: string) => `${DOMAIN}/categories/${category_id}`,
  getSearchItems: (term: string, limit: number) =>
    `${DOMAIN}/sites/MLA/search?q=${term}&limit=${limit}`,
  getProductInfo: (id: string) => `${DOMAIN}/items/${id}`,
  getProductDescription: (id: string) => `${DOMAIN}/items/${id}/description`,
  getCurrencyInfo: (currency_id: string) =>
    `${DOMAIN}/currencies/${currency_id}`
}
