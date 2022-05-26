// NOTE: You do not need to edit this file

const http = require('http');
const express = require('express')
const apiProductsRouter = require('./routes/api/products')

const port = 3000
const hostname = 'localhost'

const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => res.send('Build the API!'))

app.use('/api/v1/products', apiProductsRouter)

app.get('/api/v1/*', (req, res) => res.status(404).json({ error: 'Page not found' }))

app.get('*', (req, res) => res.status(404).send('Page not found'))

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})