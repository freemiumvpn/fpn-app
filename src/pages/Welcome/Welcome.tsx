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
import { Redirect } from 'react-router-dom'
import { filter } from 'rxjs/operators'

import { getEnvVars } from '../../env'
import { AppContext } from '../../context/Context'
import { Path } from '../../routes/routes'
import { AnalyticsEventType } from '../../middlewares/analytics/Analytics'
import { useUser } from '../../modules/user/hooks/useUser'
import useObservable from '../../shared/hooks/useObservable'
import { TOKEN_INIT } from '../../context/auth/createAuthContext'
import SplashPage from '../Splash/Splash'
import ProductHunt from '../../shared/components/ProductHunt'

import styles from './Welcome.scss'
import { WelcomeStart } from './components/WelcomeStart/WelcomeStart'
import { WelcomeInstall } from './components/WelcomeInstall/WelcomeInstall'
import { WelcomeConnect } from './components/WelcomeConnect/WelcomeConnect'
import { WelcomeFinish } from './components/WelcomeFinish/WelcomeFinish'

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
    analytics: { analytics$ },
  } = React.useContext(AppContext)
  const {
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
    user,
  } = useAuth0()

  const auth = useObservable(
    auth$.pipe(
      filter(a => a.token !== ''),
      filter(a => a.token !== TOKEN_INIT)
    ),
    { token: '' }
  )
  const isValidToken = Boolean(auth.token) && auth.token !== TOKEN_INIT
  const { user: userInfo, loading, error } = useUser(
    user && user.sub,
    !isValidToken
  )
  React.useEffect(() => {
    analytics$.next({
      event: AnalyticsEventType.APP_PAGE_LOAD,
      data: Path.WELCOME,
    })
  }, [analytics$])

  useEffect(() => {
    if (isLoading || !isAuthenticated) return

    const {
      auth0: { audience, scope },
    } = getEnvVars()
    getAccessTokenSilently({ audience, scope }).then(token => {
      auth$.next({ token })
    })
  }, [isLoading, isAuthenticated, getAccessTokenSilently, auth$])

  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const handleNext = (): void => {
    setActiveStep(prevStep => prevStep + 1)
    analytics$.next({
      event: AnalyticsEventType.PAGE_WELCOME_CLICK_NEXT,
      data: `current: ${activeStep}`,
    })
  }

  const handleBack = (): void => {
    setActiveStep(prevStep => prevStep - 1)
    analytics$.next({
      event: AnalyticsEventType.PAGE_WELCOME_CLICK_BACK,
      data: `current: ${activeStep}`,
    })
  }

  const handleReset = (): void => {
    setActiveStep(0)
    analytics$.next({
      event: AnalyticsEventType.PAGE_WELCOME_CLICK_RESET,
      data: `current: ${activeStep}`,
    })
  }

  if (!isAuthenticated) {
    return <Redirect to={Path.LOGIN} />
  }

  if (!userInfo || loading) {
    return <SplashPage />
  }

  if (error) {
    return <Redirect to={Path.HOME} />
  }

  return (
    <div className={styles.main}>
      {getStepContent(activeStep)}

      {activeStep === steps.length && <WelcomeFinish onClick={handleReset} />}
      {!userInfo.verified && (
        <div className={styles.verify}>
          <div>We are exited to have you! 💥 </div>
          <div>
            Please check your inbox and verify your email address to continue.
          </div>
          <div>Don&#39;t worry we will be waiting for you here!</div>
          <img
            className={styles.verifyImage}
            src="https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif"
          />
        </div>
      )}

      <div className={styles.content}>
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

        {userInfo.verified && activeStep !== steps.length && (
          <div className={styles.actions}>
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
          </div>
        )}
        <ProductHunt />
      </div>
    </div>
  )
}

export default WelcomePage
