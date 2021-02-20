import { useCallback, useEffect, useState } from 'react'
import { BehaviorSubject } from 'rxjs'

type UseBehaviorSubject<T> = [T, (state: T) => void]

function useBehaviorSubject<T>($: BehaviorSubject<T>): UseBehaviorSubject<T> {
  const [currentValue, setValue] = useState($.getValue())
  const setState = useCallback((state: T): void => $.next(state), [$])

  useEffect(() => {
    const subscription = $.subscribe(setValue)
    return (): void => {
      subscription.unsubscribe()
    }
  }, [$])

  return [currentValue, setState]
}

export default useBehaviorSubject
