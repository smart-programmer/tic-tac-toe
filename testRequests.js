const https = require('https')
var querystring = require('querystring');


// https://stackoverflow.com/questions/6158933/how-is-an-http-post-request-made-in-node-js

function mockRegisterUser(userObj) {
  // construct post payload
  var postPayload = querystring.stringify({
    'username': userObj.username,
    'password': userObj.password,
  });

  let options = {
    hostname: 'tictactoe.ammarcoder.repl.co',
    port: 443,
    path: '/register',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postPayload)
    }
  };

  let req = https.request(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);

    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      console.log('Response: ' + chunk);
    });
  });
  // post the data
  req.write(postPayload);
  // end request
  req.end();

  req.on('error', function(e) {
    console.error(e);
  });
}


module.exports = {
  testUserRegistration: mockRegisterUser
}