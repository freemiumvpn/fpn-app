import path from 'path'

import express from 'express'
import morgan from 'morgan'

const PATH_ROOT = path.resolve(__dirname, '..')
const PORT = 3000

const app = express()

app.use(morgan('combined'))

app.use(express.static(path.join(PATH_ROOT, 'dist')))
app.use(express.static('/'))

app.use((_, response) => {
  response.sendFile(path.join(PATH_ROOT, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
