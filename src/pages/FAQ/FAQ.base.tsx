import React from 'react'

import HomeFooter from '../Home/components/Footer/Footer'
import HomeHeader from '../Home/components/Header'

import { Question } from './FAQ.container'
import QuestionDisplay from './components/QuestionDisplay'
import styles from './FAQ.scss'

interface FAQBasePageProps {
  questions: Question[]
}

const FAQBasePage: React.FC<FAQBasePageProps> = ({ questions }) => {
  return (
    <div className={styles.main}>
      <HomeHeader classes={{ container: styles.content }} />
      <div className={styles.body}>
        <h1>Frequently Asked Questions. FAQ</h1>
        {questions.map(question => (
          <QuestionDisplay question={question} key={question.statement} />
        ))}
      </div>

      <HomeFooter />
    </div>
  )
}

export { FAQBasePage }
