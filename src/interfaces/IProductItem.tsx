import { IPrice } from './IPrice'

export interface IProductItem {
  id: string
  title: string
  price: IPrice
  picture: string
  condition: string
  free_shipping: boolean
  sold_quantity?: number
  description?: string
  state_name?: string
}
