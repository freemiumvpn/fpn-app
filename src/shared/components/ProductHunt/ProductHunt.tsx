import React from 'react'

import styles from './ProductHunt.scss'

const ProductHunt: React.FC = () => {
  return (
    <div className={styles.main}>
      <a
        href="https://www.producthunt.com/posts/freemiumpn?utm_source=badge-review&utm_medium=badge&utm_souce=badge-freemiumpn#discussion-body"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=285882&theme=light"
          alt="Freemiumpn - A Freemium VPN you will enjoy | Product Hunt"
          className={styles.linkImage}
        />
      </a>
    </div>
  )
}

export { ProductHunt }
