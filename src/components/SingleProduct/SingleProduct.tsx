import React from 'react'
import Link from 'next/link'
import styles from './SingleProduct.module.scss'
import ProductImage from '@/components/ProductImage'
import ProductName from '@/components/ProductName'
import ProductPrice from '@/components/ProductPrice'
import ProductDescription from '@/components/ProductDescription'

import { IProductItem } from '../../interfaces'

type Props = {
  item?: IProductItem
}

const SingleProduct: React.FC<Props> = ({ item }) => {
  if (!item) return null

  return (
    <>
      <div
        data-testid="single-product"
        itemScope
        itemType="https://schema.org/Product"
      >
        <meta itemProp="productID" content={item.id} />
        <div className={styles.shell}>
          <div className={styles.shell__details}>
            <ProductImage
              className={`${styles.shell__image}`}
              url={item.picture}
              title={item.title}
            />
            <div className={styles.shell__info}>
              <span data-testid="condition" className={styles.shell__condition}>
                <meta
                  itemProp="itemCondition"
                  content={
                    item.condition === 'new' ? 'NewCondition' : 'UsedCondition'
                  }
                />
                {item.condition === 'new' ? 'Nuevo' : 'Usó'} -{' '}
                {item.sold_quantity} vendido(s)
              </span>
              <ProductName
                className={`${styles.shell__name}`}
                title={item.title}
              >
                {item.free_shipping && (
                  <i className="ico-free-shipping" title="Frete Grátis" />
                )}
              </ProductName>
              <ProductPrice
                className={`${styles.shell__price}`}
                price={item.price}
              />
              <Link href={`/items/${item.id}`}>
                <a className={styles['shell__buy-button']} title="Comprar">
                  Comprar
                </a>
              </Link>
            </div>
          </div>

          {item.description && (
            <ProductDescription
              description={item.description}
              data-testid="description"
            />
          )}
        </div>
      </div>
    </>
  )
}

export default SingleProduct
