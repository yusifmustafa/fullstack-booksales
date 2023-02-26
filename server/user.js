const express = require("express");
const app = express();
const database = require("./database");
const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
  })
);

app.post("/", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const isExists = await isExistsEmail(email);

  if (isExists) {
    res.send({ message: "Bu istifadeci movcuddur" });
    return;
  }
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      res.send({ message: "Password error" });
    }
    if (name && email && password) {
      database.query(
        "INSERT INTO users (name, email, password) VALUES (?,?,?)",
        [name, email, hash],
        (err, result) => {
          if (err) {
            res.send({ message: "Error" });
          } else {
            res.send(result);
          }
        }
      );
    } else {
      res.send({ message: "Melumatlar tam doldurulmayib" });
    }
    res.send({ message: "Melumat elave edildi" });
  });
});
async function isExistsEmail(email) {
  let say = 0;
  await database
    .query(`SELECT count(*) AS SAY FROM users WHERE email = '${email}'`)
    .then((res) => {
      say = res[0][0].SAY;
    });
  return say > 0;
}
module.exports = app;
