function memoise<Value>(fn: () => Value): () => Value {
  let called = false
  let cache: Value

  return (): Value => {
    if (called) {
      return cache
    }

    called = true
    cache = fn()

    return cache
  }
}

export default memoise
