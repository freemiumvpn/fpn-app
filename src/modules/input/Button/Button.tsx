import React from 'react'
import classnames from 'classnames'

import styles from './Button.scss'

interface ButtonProps {
  className?: string
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  disabled,
  type,
}) => {
  return (
    <button
      type={type}
      className={classnames(className, styles.button)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
