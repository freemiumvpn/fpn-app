import React from 'react'

const WelcomePage: React.FC = () => {
  return (
    <div>
      <header>
        <img src="/assets/img/fpn.png" />
        <h1>Welcome to FPN</h1>
      </header>
      <div>
        <span>Connect to private networks across the globe.</span>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default WelcomePage
