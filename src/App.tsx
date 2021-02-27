import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import './shared/styles/global.scss'
import Routes from './routes/routes'
import SplashPage from './pages/Splash/Splash'
import { AuthProvider } from './modules/auth/AuthProvider'
import { ContextProvider } from './context/Context'
import gqlClient from './middlewares/gql/client'

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<SplashPage />}>
      <AuthProvider>
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
