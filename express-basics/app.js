const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.status(200).send('Home page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h4>Resource not found</h4>')
})

app.listen(5001, () => {
  console.log('server is listening on port 5001');
})