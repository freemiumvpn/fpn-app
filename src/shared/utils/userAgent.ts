import memoise from './memoise'

enum OperatingSystem {
  UNKNOWN = 'UNKNOWN',
  WINDOWS = 'WINDOWS',
  IOS = 'IOS',
  OSX = 'OSX',
  ANDROID = 'ANDROID',
}

enum Browser {
  UNKNOWN = 'UNKNOWN',
  ANDROID = 'ANDROID',
  IOS = 'IOS',
  BROWSER = 'BROWSER',
}

const getOperatingSystem = memoise(
  (userAgent: string): OperatingSystem => {
    if (userAgent.match(/Win/i)) {
      return OperatingSystem.WINDOWS
    }
    if (userAgent.match(/like Mac OS X/i)) {
      return OperatingSystem.IOS
    }
    if (userAgent.match(/Mac/i)) {
      return OperatingSystem.OSX
    }
    if (userAgent.match(/android/gi)) {
      return OperatingSystem.ANDROID
    }

    return OperatingSystem.UNKNOWN
  }
)

const getDevice = memoise(
  (userAgent: string): Browser => {
    if (userAgent.match(/Android/i)) {
      return Browser.ANDROID
    }
    if (userAgent.match(/iPhone|iPad|iPod/i)) {
      return Browser.IOS
    }
    if (userAgent.match(/Chrome|firefox|Safari/i)) {
      return Browser.BROWSER
    }

    return Browser.UNKNOWN
  }
)

export { getDevice, getOperatingSystem, Browser, OperatingSystem }
