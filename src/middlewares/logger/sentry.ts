import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'

import { getEnvVars } from '../../env'

const env = getEnvVars()

if (env.sentry.dsn && env.app.nodeEnv === 'production') {
  Sentry.init({
    dsn: env.sentry.dsn,
    release: env.app.gitSha,
    environment: env.app.nodeEnv,
    tracesSampleRate: env.sentry.sampleRate,
    integrations: [new Integrations.BrowserTracing()],
  })
}

export { Sentry as default }
