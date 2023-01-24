const express = require("express");
const app = express();
const database = require("./database");

app.get("/",(req,res)=>{
    database.query("SELECT * FROM books ").then((data)=>{
        res.send(data[0]);
    })
})

app.get("/:id",(req,res)=>{
database.query("SELECT * FROM books where id =?",req.params.id).then((data)=>{
    res.send(data[0]);
})
})
module.exports = app;