const express = require('express')
const app = express()
const people = require('./routes/people')


// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)



app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send('Please provide credentials')
})





app.listen(5001, () => {
  console.log('server on 5001')
})