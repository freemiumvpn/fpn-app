import React from 'react'
import Button from '@material-ui/core/Button'

import { MvpFeatures } from '../MvpFeatures/MvpFeatures'

import styles from './WelcomeFinish.scss'

interface WelcomeFinishProps {
  onClick: () => void
}

const WelcomeFinish: React.FC<WelcomeFinishProps> = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>You are all Set!</h1>
      </header>

      <div className={styles.content}>
        <MvpFeatures />

        <Button
          variant="contained"
          color="primary"
          onClick={onClick}
          className={styles.button}
        >
          Start again 🔥
        </Button>
      </div>
    </div>
  )
}

export { WelcomeFinish }
