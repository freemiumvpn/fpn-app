/* eslint-disable @typescript-eslint/camelcase */
import mixpanel from 'mixpanel-browser'

import { getEnvVars } from '../../env'
import { logger } from '../logger/Logger'

enum AnalyticsEventType {
  /**
   * APP
   */
  APP_PAGE_LOAD = 'APP_PAGE_LOAD',

  /**
   * HOME PAGE
   */
  PAGE_HOME_CLICK_IOS_LINK = 'PAGE_HOME_CLICK_IOS_LINK',

  /**
   * WELCOME PAGE
   */
  PAGE_WELCOME_CLICK_NEXT = 'PAGE_WELCOME_CLICK_NEXT',
  PAGE_WELCOME_CLICK_BACK = 'PAGE_WELCOME_CLICK_BACK',
  PAGE_WELCOME_CLICK_RESET = 'PAGE_WELCOME_CLICK_RESET',
  PAGE_WELCOME_CLICK_DOWNLOAD = 'PAGE_WELCOME_CLICK_DOWNLOAD',
}

interface AnalyticsEvent {
  event: AnalyticsEventType
  data: string
}

const {
  analytics: {
    mixpanel: { token, url },
  },
} = getEnvVars()

const dataLayer = (window as any).dataLayer

class Analytics {
  constructor() {
    mixpanel.init(token, {
      api_host: url,
      batch_requests: true,
    })
  }

  push(event: AnalyticsEvent): void {
    mixpanel.track(event.event, { data: event.data })
    dataLayer.push(event)
    logger.trace({
      data: event,
    })
  }
}

const analytics = new Analytics()

export { Analytics, AnalyticsEventType, AnalyticsEvent, analytics }
