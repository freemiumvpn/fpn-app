import React from 'react'

import styles from './MvpFeatures.scss'

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

const MvpFeatures: React.FC = () => {
  return (
    <ul className={styles.list}>
      <Row icon="🔥" text="No Data Limits!" />
      <Row icon="⬇️" text="Download rate of 3Mbs/s" />
      <Row icon="⬆️" text="Upload rate of 1Mb/s" />
      <Row icon="🇨🇭" text="A distributed VPN Server" />
      <Row icon="🔌" text="1 connection" />
      <Row icon="🪓" text="No Logs" />
      <Row icon="📺" text="No Adds" />
      <Row icon="🔒" text="AES encryption or Military grade" />
    </ul>
  )
}

export { MvpFeatures }
