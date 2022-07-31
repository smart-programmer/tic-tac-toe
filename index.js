const express = require('express')
const multer = require('multer');
const upload = multer();
const session = require('express-session');
const path = require('path')
const db = require('./utils/dbUtils.js')
const tests = require('./testRequests.js')
const md = require('./utils/middleware')

const app = express()
let port = 5000
const root = path.join(__dirname)

// setup static serve
// https://stackoverflow.com/questions/13395742/can-not-get-css-file
app.use(express.static(path.join(__dirname, 'static')));
// logg requests
app.use(md.requestLogger)

// uncomment if auth system doesn't work
// app.use(upload.array());

// use POST data parsers
// https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters
// support parsing of application/json type post data
app.use(express.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  // https://www.geeksforgeeks.org/express-js-res-sendfile-function/
  res.sendFile("static/html/test.html", { root: root },
    err => {
      console.log(err)
    })
})

app.get('/register', (req, res) => {
  res.sendFile("static/html/register.html", { root: root },
    err => {
      console.log(err)
    })
})


app.post("/register", (req, res) => {
  //save user credentials
  userObj = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }
  db.registerUser(userObj)
  res.redirect("/login")
})

app.get("/login", (req, res) => {
  res.sendFile("static/html/login.html", { root: root },
    err => {
      console.log(err)
    })

})

app.post("/login", (req, res) => {
  // check credentials match
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password
  // console.log(typeof (req.body))
  if (!email || !username || !password) {
    res.redirect("/login")
  } else {
    db.getUser(req.body).then(value => console.log(value))
  }
  res.redirect("/")
})


//secret routes 🌚
app.get("/hamad", (req, res) => {
  res.send("hamad is saleb")
})

app.get("/tests", (req, res) => {
  tests.testUserRegistration({ username: "ammar", password: "123" });
  res.send("all tests passed")
})


app.listen(port, () => console.log(`server is listening on ${port}`))



// EJS
// https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application

// middleware
//https://expressjs.com/en/guide/writing-middleware.html
// https://expressjs.com/en/guide/using-middleware.html


// authentication 
//https://www.tutorialspoint.com/expressjs/expressjs_authentication.htm#
// NOTE: coockie-parser and body-parser are now included in express so no need to install them sepratly

 // If you pass anything to the next() function (except the string 'route' or 'router'), Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions.

// https://www.geeksforgeeks.org/express-js-app-set-function/

// https://stackoverflow.com/questions/57492546/what-is-the-difference-between-js-and-mjs-files


// reddis as session store
// https://www.npmjs.com/package/connect-redis

// handeling multipart form data
// https://www.npmjs.com/package/multer