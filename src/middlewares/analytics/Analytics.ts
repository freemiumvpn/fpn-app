import { logger } from '../logger/Logger'

enum AnalyticsEventType {
  /**
   * Default events
   */
  JS = 'JS',
  CONFIG = 'config',

  /**
   * APP
   */
  APP_PAGE_LOAD = 'tag_app_page_load',

  /**
   * VPN
   */
  VPN_DOWNLOAD_CONFIG = 'tag_vpn_download_config',
}

interface AnalyticsEvent {
  event: AnalyticsEventType
  data: string
}

interface GaWindow {
  dataLayer: AnalyticsEvent[]
}

class Analytics {
  constructor() {
    this.push({ event: AnalyticsEventType.JS, data: new Date().toISOString() })
    this.push({ event: AnalyticsEventType.CONFIG, data: 'G-NN4DKBQ40N' })
  }

  push(event: AnalyticsEvent): void {
    const { dataLayer } = window as Window & typeof globalThis & GaWindow
    if (!dataLayer) {
      return logger.error('Data Layer does not exist')
    }

    dataLayer.push(event)
  }
}

const analytics = new Analytics()

export { Analytics, AnalyticsEventType, AnalyticsEvent, analytics }
