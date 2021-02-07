import React from 'react'

import { DashboardContent } from '../DashboardContent/DashboardContent'

import styles from './Dashboard.scss'

const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}></aside>
      <div className={styles.main}>
        <div className={styles.header}></div>
        <div className={styles.content}>
          <DashboardContent />
        </div>
        <div className={styles.footer}></div>
      </div>
    </div>
  )
}

export { Dashboard }
