import React from 'react'
import classnames from 'classnames'

import styles from './Logo.scss'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg className={classnames(className, styles.logo)} viewBox="0 0 300 300">
      <defs />
      <path fill="none" d="M-1-1h802v602H-1z" />
      <g>
        <path fill="#0B345A" stroke="null" d="M0 0h300v300H0z" />
        <g fill="#22C4D6" transform="matrix(9.45842 0 0 9.55037 .063 49.618)">
          <circle cx="15.852" cy="10.2" r="8.066" />
          <path d="M31.852-5.82h-32v32h32v-32zm-16 26.085c-5.55 0-10.066-4.516-10.066-10.065C5.786 4.65 10.302.134 15.852.134c5.55 0 10.065 4.516 10.065 10.066.001 5.55-4.515 10.065-10.065 10.065z" />
        </g>
      </g>
    </svg>
  )
}

export default Logo
