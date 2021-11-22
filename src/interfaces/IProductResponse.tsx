import { IAuthor } from './IAuthor'
import { IProductItem } from './IProductItem'

export interface IProductResponse {
  author: IAuthor
  categories: string[]
  item: IProductItem | null
}
