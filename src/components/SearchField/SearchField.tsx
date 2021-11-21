import React, { useState } from 'react'
import { useRouter } from 'next/router'

import styles from './SearchField.module.scss'

const SearchField: React.FC = () => {
  // Save the value of search digit by user
  const [term, setTerm] = useState('')
  const router = useRouter()

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!term) return

    router.push(`/items?search=${term}`)
  }

  return (
    <div className={styles.shell}>
      <form onSubmit={onSubmit} role="search">
        <input
          type="text"
          className={styles.shell__input}
          name="search"
          onInput={onChange}
          placeholder="Nunca dejes de buscar"
          autoComplete="off"
          tabIndex={2}
        />
        <button type="submit" className={styles.shell__button} tabIndex={3}>
          Buscar
        </button>
      </form>
    </div>
  )
}

export default SearchField
