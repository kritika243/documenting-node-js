const expres = require('express')

const app = expres()

// listen for request
app.listen(3000)

app.get('/', (req, res) => {
  res.send('<p>hellooo</p>')
})
