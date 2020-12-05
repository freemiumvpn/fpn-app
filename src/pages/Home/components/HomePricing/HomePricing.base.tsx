import React from 'react'
import classnames from 'classnames'

import HomePricingPlan from '../HomePricingDescription/HomePricingPlan'

import { PricingCycle } from './HomePricing.container'
import styles from './HomePricing.scss'

export enum PricePlan {
  FREE = 'FREE',
  STANDARD = 'STANDARD',
}

export interface Plan {
  priceMonthly: string
  priceYearly: string
  pricePlan: string
  priceDescription: string
  metadata: string[]
}

const planDescriptions: Record<PricePlan, Plan> = {
  [PricePlan.FREE]: {
    priceMonthly: '£0',
    priceYearly: '£0',
    pricePlan: PricePlan.FREE,
    priceDescription: 'Per user',
    metadata: [
      '🪓 No Logs',
      '📺 No Adds',
      '🔌 1 Vpn Connection',
      '🚂 Medium speed',
    ],
  },
  [PricePlan.STANDARD]: {
    priceMonthly: '£2.5',
    priceYearly: '£30',
    pricePlan: PricePlan.STANDARD,
    priceDescription: 'Per User',
    metadata: [
      '🪓 No Logs',
      '📺 No Adds',
      '🔌 4 Vpn Connections',
      '🚄 High speed',
    ],
  },
}

interface HomePricingBaseProps {
  classes: {
    container: string
  }
  priceCycle: PricingCycle
  onTogglePrice: () => void
}

const HomePricingBase: React.FC<HomePricingBaseProps> = ({
  classes,
  onTogglePrice,
  priceCycle,
}) => {
  return (
    <div className={classnames(styles.container, classes.container)}>
      <h1 className={styles.title}>Pricing</h1>
      <p className={styles.text}>
        Use FPN for free. Upgrade to enable multiple connections, high speed and
        additional features. For Enterprise plans, contact us.
      </p>
      <div className={styles.pricingHeader}>
        <span className={styles.pricingHeaderTitle}>Billing cycle:</span>
        <div className={styles.pricingHeaderOptions} onClick={onTogglePrice}>
          <span
            className={classnames(styles.toggleLabel, {
              [styles.toggleSelected]: priceCycle === PricingCycle.MONTHLY,
            })}
          >
            {PricingCycle.MONTHLY.toLocaleLowerCase()}
          </span>
          <span
            className={classnames(styles.toggleLabel, {
              [styles.toggleSelected]: priceCycle === PricingCycle.YEARLY,
            })}
          >
            {PricingCycle.YEARLY.toLocaleLowerCase()}
          </span>
        </div>
      </div>
      <div className={styles.description}>
        {Object.keys(planDescriptions).map(plan => (
          <HomePricingPlan
            key={plan}
            plan={planDescriptions[plan as PricePlan]}
            priceCycle={priceCycle}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePricingBase
