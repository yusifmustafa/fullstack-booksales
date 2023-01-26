const express = require("express");
const app = express();
const database = require("./database");

app.get("/", (req, res) => {
  database
    .query(
      "SELECT B.author,B.genre,B.name,B.price,B.image,B.id,BP.count,BP.id as BPid  FROM basketproduct BP INNER JOIN books B ON BP.bookId = B.id;"
    )
    .then((rsp) => {
      res.send(rsp[0]);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  database
    .query(
      "SELECT B.author,B.genre,B.name,B.price,B.image,B.id,BP.count,BP.id as BPid FROM basketproduct BP INNER JOIN books B ON BP.bookId= B.id WHERE BP.bookId =?",
      id
    )
    .then((data) => {
      res.send(data[0]);
    });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;

  database
    .query(`SELECT count(*) as Say FROM basketproduct WHERE bookId= ${id}`)
    .then((rsp) => {
      const say = rsp[0][0].Say;
      if (say === 0) {
        database.query(
          "INSERT INTO basketproduct (bookId) values (?)",
          id,
          (err, result) => {
            if (err) {
              return console.log(err);
            } else {
              res.send(result);
            }
          }
        );
        res.send({ result: true });
      } else {
        res.send({ result: false });
      }
    });
});

// app.put("/:id", (req, res) => {
//   const data = [req.params.count, req.params.id];
//   database.query(
//     "UPDATE basketproduct Set count=? WHERE bookId = ?",
//     data,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
//   res.send(data);
// });

app.delete("/:id", (req, res) => {
  database.query(
    "DELETE FROM basketproduct WHERE id =?",
    +req.params.id,
    (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
module.exports = app;
