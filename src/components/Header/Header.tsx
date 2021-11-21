import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Header.module.scss'
import SearchField from '@/components/SearchField'

const Header: React.FC = () => {
  const router = useRouter()
  const LogoContent = router.pathname !== '/items/[id]' ? 'h1' : 'div'

  return (
    <header className={styles.shell}>
      <div className={styles.shell__wrapper}>
        <LogoContent>
          <Link href="/" passHref>
            <a
              className={styles.shell__logo}
              title="Mercado Libre"
              tabIndex={1}
            >
              Mercado Libre
            </a>
          </Link>
        </LogoContent>
        <SearchField />
      </div>
    </header>
  )
}

export default Header
