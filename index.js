const express = require('express')
const path = require('path')
const db = require('./dbUtils.js')
const tests = require('./testRequests.js')

const app = express()
let port = 5000

// setup static serve
// https://stackoverflow.com/questions/13395742/can-not-get-css-file
app.use(express.static(path.join(__dirname, 'static')));

// use GET/POST data parsers
// https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  // https://www.geeksforgeeks.org/express-js-res-sendfile-function/
  res.sendFile("static/html/test.html", { root: path.join(__dirname) },
    err => {
      console.log(err)
    })
})

app.get('/register', (req, res) => {
  res.sendFile("static/html/register.html", { root: path.join(__dirname) },
    err => {
      console.log(err)
    })
})


app.post("/register", (req, res) => {
  //save user credentials
  userObj = {
    username: req.body.username,
    password: req.body.password
  }
  db.registerUser(userObj)
})


//secret routes 🌚
app.get("/hamad", (req, res) => {
  res.send("hamad is saleb")
})

app.get("/ammar", (req, res) => {
  res.send("ammar is pussy as fuck")
})

app.get("/tests", (req, res) => {
  tests.testUserRegistration({ username: "ammar", password: "123" });
  res.send("all tests passed")
})




app.listen(port, () => console.log(`server is listening on ${port}`))


// EJS
// https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application

// middleware
// https://expressjs.com/en/guide/using-middleware.html