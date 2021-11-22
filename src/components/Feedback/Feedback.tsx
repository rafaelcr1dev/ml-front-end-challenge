import React from 'react'

import styles from './Feedback.module.scss'

type Props = {
  children: React.ReactElement | React.ReactElement[]
  term?: string
}

const Feedback: React.FC<Props> = ({ children, term }) => (
  <div className={styles.shell} itemScope>
    {children} {term && <span className={styles.shell__term}>{term}</span>}
  </div>
)

export default Feedback
