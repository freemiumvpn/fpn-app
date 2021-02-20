import React from 'react'
import classnames from 'classnames'

import styles from './Openvpn.scss'

interface OpenvpnProps {
  className?: string
}

const Openvpn: React.FC<OpenvpnProps> = ({ className }) => {
  return (
    <svg
      className={classnames(className, styles.logo)}
      viewBox=".22 -.01 599.63 582.58"
    >
      <path
        fill="#ff7a24"
        d="M599.85 297.43C599.85 133.16 465.63-.01 300.03-.01 134.5-.01.22 133.16.22 297.43c0 109.12 59.43 204.21 147.69 256.04l19.22-127.5c-28.48-31.45-45.96-72.91-45.96-118.52 0-98 80.1-177.47 178.86-177.47 98.83 0 178.87 79.47 178.87 177.47 0 46.02-17.69 87.77-46.58 119.21l19.14 127.23c88.67-51.7 148.39-147 148.39-256.46z"
      />
      <path
        fill="#123467"
        d="M332.93 387.41l36.42 195.16H228.64l36.28-194.82c-35.87-13.61-61.51-48.03-61.51-88.66 0-52.53 42.58-95.1 95.03-95.1 52.53 0 95.03 42.57 95.03 95.1 0 40.29-25.15 74.49-60.54 88.32z"
      />
    </svg>
  )
}

export { Openvpn }
