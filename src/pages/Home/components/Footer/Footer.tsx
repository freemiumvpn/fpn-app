import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import { Path } from '../../../../routes/routes'

import styles from './Footer.scss'

interface HomeFooterProps {
  classes: {
    container: string
  }
}

const HomeFooter: React.FC<HomeFooterProps> = props => {
  return (
    <footer className={styles.footer}>
      <div className={classnames(props.classes.container)}>
        <Link className={styles.link} to={Path.HOME}>
          FPN - Designed in London.
        </Link>
      </div>
    </footer>
  )
}

export default HomeFooter
