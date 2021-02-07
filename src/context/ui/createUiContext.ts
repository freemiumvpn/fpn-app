import { BehaviorSubject } from 'rxjs'

enum UiType {
  NONE = 'NONE',
  CLICK = 'CLICK',

  VPN_CONNECT = 'VPN_CONNECT',
  VPN_DISCONNECT = 'VPN_DISCONNECT',
}

interface UIEvent {
  type: UiType
  event?: unknown
}

interface UiContext {
  ui$: BehaviorSubject<UIEvent>
}

const createUiContext = (): UiContext => {
  return {
    ui$: new BehaviorSubject<UIEvent>({ type: UiType.NONE }),
  }
}

export { createUiContext, UiContext, UIEvent, UiType }
