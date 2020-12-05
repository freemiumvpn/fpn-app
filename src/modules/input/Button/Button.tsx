import React from 'react'
import classnames from 'classnames'

import styles from './Button.scss'

interface ButtonProps {
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button className={classnames(className, styles.button)} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
