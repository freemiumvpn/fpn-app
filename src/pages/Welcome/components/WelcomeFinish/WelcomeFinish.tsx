import React from 'react'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'

import styles from './WelcomeFinish.scss'

interface RowProps {
  icon: string
  text: string
}

const Row: React.FC<RowProps> = ({ icon, text }) => {
  return (
    <li className={styles.listItem}>
      <span className={styles.listAvatar}>{icon}</span>
      <span>{text}</span>
    </li>
  )
}

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
        <ul className={styles.list}>
          <Row icon="🔥" text="No Data Limits | First 500 users only!" />
          <Row icon="⬇️" text="Download rate of 3Mbs/s" />
          <Row icon="⬆️" text="Upload rate of 1Mb/s" />
          <Row icon="🇨🇭" text="A distributed VPN Server" />
          <Row icon="🔌" text="1 connection" />
          <Row icon="🪓" text="No Logs" />
          <Row icon="📺" text="No Adds" />
          <Row icon="🔒" text="AES encryption or Military grade" />
        </ul>

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
