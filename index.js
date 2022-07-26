const express = require('express')

const app = express()
let port = 5000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hamad is a pussy')
})


app.listen(port, () => console.log(`server is listening on ${port}`))