import React from 'react'
import styles from './ProductDescription.module.scss'

type Props = {
  description: string
}

const ProductDescription: React.FC<Props> = ({ description }) => (
  <div className={styles.shell}>
    <h3 className={styles.shell__title}>Descripción del producto</h3>
    <p className={styles.shell__description} data-testid="description">
      {description}
    </p>
  </div>
)

export default ProductDescription
