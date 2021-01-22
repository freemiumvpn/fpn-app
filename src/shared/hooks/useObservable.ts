import { useEffect, useState } from 'react'
import { Observable } from 'rxjs'

function useObservable<T>(observable: Observable<T>, initialValue: T): T {
  const [currentValue, setValue] = useState(initialValue)

  useEffect(() => {
    const subscription = observable.subscribe(setValue)
    return (): void => {
      subscription.unsubscribe()
    }
  }, [observable])

  return currentValue
}

export default useObservable
