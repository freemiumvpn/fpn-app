import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import './shared/styles/global.scss'
import Routes from './routes/routes'
import SplashPage from './pages/Splash/Splash'
import AuthProvider from './modules/auth/AuthProvider'
import { ContextProvider } from './context/Context'
import gqlClient from './middlewares/gql/client'
import { getEnvVars } from './env'

const App: React.FC = () => {
  const env = getEnvVars()

  return (
    <React.Suspense fallback={<SplashPage />}>
      <AuthProvider
        domain={env.auth0.domain}
        clientId={env.auth0.clientId}
        redirectUri={env.auth0.redirectUri}
        audience={env.auth0.audience}
        scope={env.auth0.scope}
      >
        <ContextProvider>
          <ApolloProvider client={gqlClient}>
            <Router>
              <Routes />
            </Router>
          </ApolloProvider>
        </ContextProvider>
      </AuthProvider>
    </React.Suspense>
  )
}

export default App
