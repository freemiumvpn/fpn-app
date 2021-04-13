import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'

import { getEnvVars } from '../../env'

const env = getEnvVars()

if (env.sentry.dsn) {
  Sentry.init({
    dsn: env.sentry.dsn,
    tracesSampleRate: env.sentry.sampleRate,
    integrations: [new Integrations.BrowserTracing()],
  })
}

export { Sentry as default }
