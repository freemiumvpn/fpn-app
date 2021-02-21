import React, { useEffect } from 'react'
import classnames from 'classnames'
import Button from '@material-ui/core/Button'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import ToysIcon from '@material-ui/icons/Toys'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import PowerIcon from '@material-ui/icons/Power'
import { useAuth0 } from '@auth0/auth0-react'

import { getEnvVars } from '../../env'
import { AppContext } from '../../context/Context'

import styles from './Welcome.scss'
import { WelcomeStart } from './components/WelcomeStart/WelcomeStart'
import { WelcomeInstall } from './components/WelcomeInstall/WelcomeInstall'
import { WelcomeConnect } from './components/WelcomeConnect/WelcomeConnect'

const getSteps = (): string[] => {
  return ['Start', 'Install', 'Connect']
}

const getStepContent = (step: number): JSX.Element | null => {
  switch (step) {
    case 0:
      return <WelcomeStart />
    case 1:
      return <WelcomeInstall />
    case 2:
      return <WelcomeConnect />
    default:
      return null
  }
}

interface StepIconProps {
  active: boolean
  completed: boolean
  icon: 1 | 2 | 3
}

const StepIconComponent: React.FC<StepIconProps> = props => {
  const { active, completed, icon } = props

  const icons = {
    1: <ToysIcon />,
    2: <CloudDownloadIcon />,
    3: <PowerIcon />,
  }

  const currentIcon = icons[icon] || null

  return (
    <div
      className={classnames(styles.stepIcon, {
        [styles.stepIconActive]: active,
        [styles.stepIconCompleted]: completed,
      })}
    >
      {currentIcon}
    </div>
  )
}

const WelcomePage: React.FC = () => {
  const {
    auth: { auth$ },
  } = React.useContext(AppContext)
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (isLoading || !isAuthenticated) return

    const {
      auth0: { audience, scope },
    } = getEnvVars()
    getAccessTokenSilently({ audience, scope }).then(token => {
      auth$.next({ token })
    })
  }, [isLoading, isAuthenticated, getAccessTokenSilently, auth$])

  const [activeStep, setActiveStep] = React.useState(2)
  const steps = getSteps()

  const handleNext = (): void => {
    setActiveStep(prevStep => prevStep + 1)
  }

  const handleBack = (): void => {
    setActiveStep(prevStep => prevStep - 1)
  }

  const handleReset = (): void => {
    setActiveStep(0)
  }

  return (
    <div className={styles.main}>
      {getStepContent(activeStep)}

      <div>
        <Stepper
          classes={{
            root: styles.stepper,
          }}
          alternativeLabel
          activeStep={activeStep}
        >
          {steps.map(label => (
            <Step className={styles.step} key={label}>
              <StepLabel StepIconComponent={StepIconComponent}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className={styles.actions}>
          {activeStep === steps.length ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleReset}
              className={styles.button}
            >
              Dashboard 🔥
            </Button>
          ) : (
            <>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={styles.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
