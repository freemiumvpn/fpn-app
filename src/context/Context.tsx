import React, { useEffect } from 'react'

import { errorHandler } from '../middlewares/error/ErrorHandler'

import {
  AnalyticsContext,
  createAnalyticsContext,
} from './analytics/createAnalyticsContext'
import createAuthContext, { AuthContext } from './auth/createAuthContext'
import createSubscriptions from './createSubscriptions'
import createErrorContext, { ErrorContext } from './error/createErrorContext'
import createGqlContext, { GqlContext } from './gql/createGqlContext'
import createLocalStorageContext, {
  LocalStorageContext,
} from './localStorage/createLocalStorageContext'
import { createUiContext, UiContext } from './ui/createUiContext'

interface AppContext {
  auth: AuthContext
  gql: GqlContext
  error: ErrorContext
  localStorage: LocalStorageContext
  ui: UiContext
  analytics: AnalyticsContext
}

const appContext = {
  auth: createAuthContext(),
  gql: createGqlContext(),
  error: createErrorContext(),
  localStorage: createLocalStorageContext(errorHandler),
  ui: createUiContext(),
  analytics: createAnalyticsContext(),
}

const AppContext = React.createContext(appContext)

const ContextProvider: React.FC = props => {
  useEffect(() => {
    const subscriptions = createSubscriptions(appContext)
    return (): void => {
      subscriptions.forEach(s => s.unsubscribe())
    }
  }, [])

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext as Context, AppContext, ContextProvider }
