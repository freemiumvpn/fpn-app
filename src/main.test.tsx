describe('Example Test', () => {
  it('should mount example node', () => {
    const container = document.createElement('div')
    container.id = 'main'

    document.body.appendChild(container)
    require('./main.tsx')

    const element = document.querySelector('div')

    const value = element && element.innerHTML

    expect(value).toBeTruthy()
  })
})
