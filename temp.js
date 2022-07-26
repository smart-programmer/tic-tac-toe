const db = require("./dbUtils")


// db.db.delete("lastUserId").then(() => { });
// db.db.delete("user1").then(() => { });
// db.db.delete("user[object Promise]").then(() => { });
db.db.list().then(keys => {
  for (let i = 0; i < keys.length; i++) {
    db.db.get(keys[i]).then(value => { console.log(value) });
  }
});

// db.db.list().then(keys => {
//   console.log(keys)
// });