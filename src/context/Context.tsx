import React, { useEffect } from 'react'

import { errorHandler } from '../middlewares/error/ErrorHandler'

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
}

const appContext = {
  auth: createAuthContext(),
  gql: createGqlContext(),
  error: createErrorContext(),
  localStorage: createLocalStorageContext(errorHandler),
  ui: createUiContext(),
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
