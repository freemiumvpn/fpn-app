import React from 'react'
import classnames from 'classnames'

import usePing, { PingStatus } from '../../hooks/usePing'

import styles from './Ping.scss'

const Ping: React.FC = () => {
  const { status } = usePing()

  const legend = {
    [PingStatus.NONE]: 'Pinging the server ...',
    [PingStatus.ERROR]: 'Failed to connect to server',
    [PingStatus.LOADING]: 'Waiting for the server ...',
    [PingStatus.SUCCESS]: 'Connected to the server',
  }[status]

  return (
    <div className={styles.container}>
      <div className={styles.legend}>{legend}</div>
      <div
        className={classnames(styles.indicator, {
          [styles.error]: status === PingStatus.ERROR,
          [styles.loading]: status === PingStatus.LOADING,
          [styles.success]: status === PingStatus.SUCCESS,
        })}
      />
    </div>
  )
}

export default Ping
