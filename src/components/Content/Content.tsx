import React from 'react'

import styles from './Content.module.scss'

type Props = {
  children: React.ReactElement | React.ReactElement[]
}

const Content: React.FC<Props> = ({ children }) => (
  <>
    <div className={styles.shell}>
      <div className={styles.shell__wrapper}>{children}</div>
    </div>
  </>
)

export default Content
