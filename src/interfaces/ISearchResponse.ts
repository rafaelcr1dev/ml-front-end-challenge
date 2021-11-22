import { IProductItem } from './IProductItem'
import { IAuthor } from './IAuthor'

export interface ISearchResponse {
  author: IAuthor
  categories: string[]
  items: IProductItem[]
}
