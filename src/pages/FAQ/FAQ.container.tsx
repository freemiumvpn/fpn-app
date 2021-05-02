import React from 'react'

import { FAQBasePage } from './FAQ.base'

export interface Question {
  statement: string
  answer: string
}

const questions: Question[] = [
  {
    statement: 'Does your app collect, retain, or transmit user data?',
    answer: 'TODO',
  },
  {
    statement:
      'What user data does your app collect, how is it used, and is it transmitted from the iOS device?',
    answer: 'TODO',
  },
  {
    statement:
      'Is user data collected for ad targeting or app analytics purposes?',
    answer: 'TODO',
  },
  {
    statement:
      'How do you disclose data collection, retention, or transmission to your users?',
    answer: 'TODO',
  },
  {
    statement:
      'Do you share user data with any third party entities? If so, with whom and for what purpose?',
    answer: 'TODO',
  },
]

const FAQPage: React.FC = () => {
  return <FAQBasePage questions={questions} />
}

export { FAQPage }
