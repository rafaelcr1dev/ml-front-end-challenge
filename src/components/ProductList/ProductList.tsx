import React from 'react'

import { IProductItem } from '../../interfaces'

import styles from './ProductList.module.scss'
import ProductCard from '../ProductCard'

type Props = {
  products: IProductItem[]
}

const ProductList: React.FC<Props> = ({ products }) => (
  <div className={styles.shell}>
    {products?.map(product => (
      <ProductCard product={product} key={product.id} />
    ))}
  </div>
)

export default ProductList
