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

module.exports = {
  db: db,
  registerUser: registerUser
}


