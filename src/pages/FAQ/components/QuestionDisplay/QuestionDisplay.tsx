import React, { useState } from 'react'
import classnames from 'classnames'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

import { Question } from '../../FAQ.container'

import styles from './QuestionDisplay.scss'

const QuestionDisplay: React.FC<{ question: Question }> = ({ question }) => {
  const [isVisible, setVisible] = useState(false)

  const handleClick = (): void => {
    setVisible(prev => !prev)
  }

  return (
    <section onClick={handleClick} className={styles.main}>
      <div className={styles.header}>
        {isVisible ? <RemoveIcon /> : <AddIcon />}
        <h3 className={styles.title}>{question.statement}</h3>
      </div>

      <div
        className={classnames(styles.body, {
          [styles.hidden]: !isVisible,
        })}
      >
        {question.answer}
      </div>
    </section>
  )
}

export { QuestionDisplay }
