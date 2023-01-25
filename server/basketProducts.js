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
      "SELECT B.author,B.genre,B.name,B.price,B.image,B.id,,BP.count,BP.id as BPid FROM basketproduct BP INNER JOIN books B ON BP.bookId= B.id WHERE BP.id =?",
      id
    )
    .then((data) => {
      res.send(data[0]);
      console.log(data[0]);
    });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  // database.query("SELECT count(*) FROM basketproduct WHERE bookId = id",id,(err,result)=>{

  //        console.log(result);
  //        if (err){
  //            console.log(err);
  //        }
  //        else{
  //            res.send(result);
  //        }
  // res.send(result);
  // })

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

  res.send(id);
});

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
