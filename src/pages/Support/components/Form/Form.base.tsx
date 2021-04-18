import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import Button from '../../../../modules/input/Button/Button'
import { logger } from '../../../../middlewares/logger/Logger'

import styles from './Form.scss'

interface FormValues {
  email?: string
  content?: string
}

interface FieldRenderProps {
  field: unknown
  form: {
    isSubmitting: boolean
  }
}

const SupportForm: React.FC = () => {
  const [isSubmitted, setSubmitted] = useState(false)

  const initialValue = { email: '', content: '' }
  const onValidate = (values: FormValues): FormValues => {
    const errors: FormValues = {}
    if (!values.email) {
      errors.email = 'Please provide us with you email 💌'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'This email looks incorrect 🤨'
    }
    if (
      !values.content ||
      (values.content && values.content.split(' ').length < 5)
    ) {
      errors.content = 'Please provide more information (min 5 words)'
    }
    return errors
  }

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (s: boolean) => void }
  ): void => {
    logger.info(JSON.stringify({ type: 'Support Page Form', ...values }))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <Formik
      initialValues={initialValue}
      validate={onValidate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }): JSX.Element => (
        <Form className={styles.form}>
          {isSubmitted ? (
            <div className={styles.info}>
              Thanks! we will get back to you a soon as we can
            </div>
          ) : (
            <>
              <Field
                type="email"
                name="email"
                className={styles.email}
                placeholder="Email address"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
              <Field
                type="content"
                name="content"
                render={({
                  field,
                  form: { isSubmitting },
                }: FieldRenderProps): JSX.Element => (
                  <textarea
                    {...field}
                    disabled={isSubmitting}
                    className={styles.content}
                    placeholder="What's on your mind?"
                  />
                )}
              />
              <ErrorMessage
                name="content"
                component="div"
                className={styles.error}
              />

              <Button type="submit" disabled={isSubmitting || isSubmitted}>
                Send
              </Button>
            </>
          )}
        </Form>
      )}
    </Formik>
  )
}

export { SupportForm }
