import React from 'react'
import Link from 'next/link'
import ProductName from '@/components/ProductName'
import ProductImage from '@/components/ProductImage'
import ProductPrice from '@/components/ProductPrice'

import { IProductItem } from '../../interfaces'

import styles from './ProductCard.module.scss'

type Props = {
  product: IProductItem
}

const ProductCard: React.FC<Props> = ({ product }) => (
  <div
    key={product.id}
    className={styles.shell}
    itemScope
    itemType="https://schema.org/Product"
    data-testid="product"
  >
    <Link href={`/items/${product.id}`}>
      <a className={`${styles.shell__link}`}>
        <ProductImage
          className={`${styles.shell__image}`}
          url={product.picture}
          width="180"
          title={product.title}
        />
        <div className={styles.shell__info}>
          <ProductPrice
            className={`${styles.shell__price}`}
            price={product.price}
          >
            {product.free_shipping && (
              <i className="ico-free-shipping" title="Frete Grátis" />
            )}
          </ProductPrice>
          <ProductName
            className={`${styles.shell__name}`}
            title={product.title}
          />
        </div>
        <div className={`${styles.shell__state}`}>
          <span>{product.state_name}</span>
        </div>
      </a>
    </Link>
  </div>
)

export default ProductCard
