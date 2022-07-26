const express = require('express')
const path = require('path')

const app = express()
let port = 5000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.sendFile("static/html/test.html",{root: path.join(__dirname)},
              err => {
                console.log(err)
              })
})


app.listen(port, () => console.log(`server is listening on ${port}`))