const Database = require("@replit/database")

const db = new Database()

function generateUserId() {
  return db.get("lastUserId").then(value => {
    if (value === null) return 1
    return ++value
  });
}

async function registerUser(userObj) {
  let userId = await generateUserId()
  userId = userId.toString()
  userObj.id = userId
  // register new user
  db.set(`user${userId}`, JSON.stringify(userObj)).then(() => {
    console.log("user added successfully")
  });

  // save latest id
  db.set("lastUserId", userId).then(() => { })
}

async function returnUser(userObj) {
  // check credentials match
  const email = userObj.email
  const username = userObj.username
  const password = userObj.password
  // loop through all db entries and return matched user
  let keys = await db.list()
  for (let i = 0; i < keys.length; i++) {
    let user = JSON.parse(await db.get(keys[i]))
    if (user.username == username && user.email == email && user.password == password) {
      return user
    }
  }
}





module.exports = {
  db: db,
  registerUser: registerUser,
  getUser: returnUser
}


