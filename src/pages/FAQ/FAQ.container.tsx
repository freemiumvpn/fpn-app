import React from 'react'

import { FAQBasePage } from './FAQ.base'

export interface Question {
  statement: string
  answer: JSX.Element | string
}

const questions: Question[] = [
  {
    statement: 'Does your app collect, retain, or transmit user data?',
    answer: `
      Yes, Freemiumpn collects website and app data for operational
      and performance purposes. However, your online activity is not being
      monitored, recorded, logged, stored or sent to a third party.
      `,
  },
  {
    statement:
      'What user data does your app collect, how is it used, and is it transmitted from the iOS device?',
    answer: `
    The minimum information that Freemiumpn requires is a
    valid email address for registration purposes. Statistical information is
    collected to ensure quality of service. We collect information about your
    device such as model, operating system, version and language.
    This information allows us to triage problem to a particular set of devices.
    This information is transmitted from your device and provided to analytic tools.
    Please note that information provided to analytic tools does not come to our control
    and we cannot be responsible for such information.
    `,
  },
  {
    statement:
      'Is user data collected for ad targeting or app analytics purposes?',
    answer: `
    We do NOT collect data for ad targeting purposes. Analytic data is 
    collected to ensure quality of service and it will not be processed
    or inspected for any other reason.
    `,
  },
  {
    statement:
      'How do you disclose data collection, retention, or transmission to your users?',
    answer: (
      <span>
        We disclose this information in our{' '}
        <a href="https://www.freemiumpn.com/privacy-policy" target="__blank">
          Privacy Policy
        </a>
        .
      </span>
    ),
  },
  {
    statement:
      'Do you share user data with any third party entities? If so, with whom and for what purpose?',
    answer: (
      <span>
        Yes. Apart from Statistical Data, Freemiumpn allows you to create an
        account and log in to use our network through the following Third-Party
        Social Media Services:
        <ul>
          <li>
            Auth0 - Please visit their Privacy Policy{' '}
            <a href="https://auth0.com/privacy" target="__blank">
              here
            </a>
            .
          </li>
          <li>
            Google - Please visit their Privacy Policy{' '}
            <a
              href="https://policies.google.com/privacy?hl=en-US"
              target="__blank"
            >
              here
            </a>
            .
          </li>
          <li>
            Facebook - Please visit their Privacy Policy{' '}
            <a href="https://www.facebook.com/about/privacy/" target="__blank">
              here
            </a>
            .
          </li>
          <li>
            Twitter - Please visit their Privacy Policy{' '}
            <a href="https://twitter.com/en/privacy" target="__blank">
              here
            </a>
            .
          </li>
          <li>
            Apple - Please visit their Privacy Policy{' '}
            <a
              href="https://www.apple.com/uk/legal/privacy/en-ww/"
              target="__blank"
            >
              here
            </a>
            .
          </li>
        </ul>
      </span>
    ),
  },
]

const FAQPage: React.FC = () => {
  return <FAQBasePage questions={questions} />
}

export { FAQPage }
