import { useCallback, useState } from 'react'
import React from 'react'

import HomePricingBase from './HomePricing.base'

interface HomePricingContainerProps {
  classes: {
    container: string
  }
}

export enum PricingCycle {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

const HomePricingContainer: React.FC<HomePricingContainerProps> = ({
  classes,
}) => {
  const [priceCycle, setPriceCycle] = useState(PricingCycle.MONTHLY)

  const onTogglePrice = useCallback(() => {
    const nextPriceCycle =
      priceCycle === PricingCycle.MONTHLY
        ? PricingCycle.YEARLY
        : PricingCycle.MONTHLY
    setPriceCycle(nextPriceCycle)
  }, [priceCycle, setPriceCycle])

  return (
    <HomePricingBase
      classes={classes}
      priceCycle={priceCycle}
      onTogglePrice={onTogglePrice}
    />
  )
}

export default HomePricingContainer
