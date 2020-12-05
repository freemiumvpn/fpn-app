import React from 'react'

import ButtonLink from '../../../../modules/input/ButtonLink/ButtonLink'
import { Path } from '../../../../routes/routes'
import { Plan } from '../HomePricing/HomePricing.base'
import { PricingCycle } from '../HomePricing/HomePricing.container'

import styles from './HomePricingPlan.scss'

interface HomePricingPlanProps {
  plan: Plan
  priceCycle: PricingCycle
}

const HomePricingPlan: React.FC<HomePricingPlanProps> = ({
  priceCycle,
  plan: { priceMonthly, priceYearly, pricePlan, metadata },
}) => {
  const price =
    priceCycle === PricingCycle.MONTHLY
      ? `${priceMonthly} per Month`
      : `${priceYearly} per Year`

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{pricePlan}</h3>
      <div className={styles.price}>
        <span>{price}</span>
      </div>
      <ButtonLink className={styles.cta} to={Path.SIGN_UP}>
        Sign Up
      </ButtonLink>
      <div className={styles.metadata}>
        {metadata.map(m => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  )
}

export default HomePricingPlan
