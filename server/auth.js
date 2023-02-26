const express = require("express");
const app = express();
const database = require("./database");
const session = require("express-session");
const bcrypt = require("bcrypt");

app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
    })
);

app.post("/", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const user = await getUserByEmail(email);

    if (!user) {
        res.send({message: "Bu mailde istifadeci movcud deyil"});
        return;
    }
    bcrypt.compare(password,user.password,(err,result)=>{
        if(result){
            req.session.userId = user.id;
            res.send({message:"Girish ugurludur"})
        }
        else
        {
            res.send({message:"Parol yalnishdir"});
        }
    });
});


async function getUserByEmail(email){
    let user = null;
    await database.query(`SELECT * FROM users WHERE email = '${email}'`).then((rsp)=>{
        if(rsp[0].length>0){
            user = rsp[0][0];
        }
    });
    return user;
}
module.exports = app;


