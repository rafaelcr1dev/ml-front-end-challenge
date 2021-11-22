import React from 'react'
import styles from './BreadCrumb.module.scss'

type Props = {
  categories: string[]
}

const BreadCrumb: React.FC<Props> = ({ categories }) => (
  <div className={styles.shell}>
    <ol className={styles.shell__list}>
      {categories?.map(category => (
        <li
          key={category}
          itemType="https://data-vocabulary.org/Breadcrumb"
          className={styles.shell__list__item}
        >
          <span itemProp="title">{category}</span>
        </li>
      ))}
    </ol>
  </div>
)

export default BreadCrumb
