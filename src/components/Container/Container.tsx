import React from 'react'
import Header from '@/components/Header'

import styles from './Container.module.scss'

type Props = {
  children: React.ReactElement | React.ReactElement[]
}

const Container: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <main className={styles.shell}>
      <div className={styles.shell__wrapper}>{children}</div>
    </main>
  </>
)

export default Container
