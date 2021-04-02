import React from 'react'

import styles from './PolicyContext.scss'

const PolicyContent: React.FC = () => {
  return (
    <div className={styles.main}>
      <p className={styles.metadata}>Last updated: March 29, 2021</p>
      <section>
        Freemiumpn is a zero-log service provider and does not keep records of
        your traffic, browsing or activity while using our services. Freemiumpn
        analyses website and app functionality for performance purposes.
      </section>

      <h3>Personal Data</h3>
      <section>
        <p>
          The minimum information that Freemiumpn requires is an email address
          for registration purposes.
        </p>
      </section>

      <h3>Information from Third-Party Social Media Services</h3>
      <section>
        <p>
          Freemiumpn allows you to create an account and log in to use our
          network through the following Third-Party Social Media Services:
        </p>
        <ul>
          <li>Google</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
        <p>
          If you decide to grant Freemiumpn access to a Third-Party Social Media
          Service, We may collect Personal Data that is already associated with
          your Third-Party Social Media Service&#39;s account such as your name
          and email.
        </p>
      </section>

      <h3>What do we use your information for?</h3>
      <section>
        <p>
          Freemiumpn uses the collected data to provide support for our
          services. Your information will not be sold, exchanged, transferred or
          given to any other party for any reason whatsoever, without your
          consent.
        </p>
      </section>

      <h3>How do we protect your information?</h3>
      <section>
        <p>
          Freemiumpn provides a secure network. Information is transmitted via
          Secure Socket Layer (SSL) only to be accessible to those with special
          access rights to our systems whom are required to keep the information
          confidential.
        </p>
      </section>

      <h3>Customer Access Data Control</h3>
      <section>
        <p>
          To review, request a copy of, or delete your account information you
          may contact us by{' '}
          <a href="https://freemiumpn.com/contact">
            visiting our contact page on our website
          </a>
          .
        </p>
      </section>

      <h3>What Freemiumpn Disclosures:</h3>
      <h4>Legal Process disclosure:</h4>
      <section>
        <ul>
          <li>
            Your personal data is never disclosed to others, unless we are
            ordered by a court of competent jurisdiction to do so.
          </li>
          <li>
            Freemiumpn will never sell any personal data, usage information or
            any other information.
          </li>
        </ul>
      </section>

      <h4>Civil Investigations:</h4>
      <section>
        <ul>
          <li>
            Freemiumpn will never release requested data for civil litigation
            unless commanded to do so by a court of competent jurisdiction in
            the matter. We will exercise all rights to restrict and protect your
            data.
          </li>
        </ul>
      </section>

      <h4>Criminal Investigations:</h4>
      <section>
        <ul>
          <li>
            Freemiumpn will cooperate fully with law enforcement agencies when
            presented with a valid subpoena issued through a competent court of
            law.
          </li>
          <li>
            When an investigation is criminal in nature, Freemiumpn would not be
            able to disclose the of the investigation to the service user.
          </li>
        </ul>
      </section>
    </div>
  )
}

export { PolicyContent }
