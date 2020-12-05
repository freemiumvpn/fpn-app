import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import { Path } from '../../../routes/routes'

import styles from './ButtonLink.scss'

interface ButtonLinkProps {
  className?: string
  to: Path
  children: React.ReactNode
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ className, to, children }) => {
  return (
    <Link className={classnames(className, styles.button)} to={to}>
      {children}
    </Link>
  )
}

export default ButtonLink
