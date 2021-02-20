import React from 'react'
import classnames from 'classnames'

import styles from './TunnelBlick.scss'

interface TunnelBlickProps {
  className?: string
}

const TunnelBlick: React.FC<TunnelBlickProps> = ({ className }) => {
  return (
    <img
      src="/assets/img/tunnelBlick.png"
      className={classnames(className, styles.logo)}
      alt="TunnelBlick"
    />
  )
}

export { TunnelBlick }
