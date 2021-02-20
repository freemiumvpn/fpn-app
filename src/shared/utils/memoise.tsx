function memoise<Value, Args>(
  fn: (...args: Args[]) => Value
): (...args: Args[]) => Value {
  let called = false
  let cache: Value

  return (...args): Value => {
    if (called) {
      return cache
    }

    called = true
    cache = fn(...args)

    return cache
  }
}

export default memoise
