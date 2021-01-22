import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './shared/styles/global.scss'
import Routes from './routes/routes'
import { ContextProvider } from './context/Context'

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App
