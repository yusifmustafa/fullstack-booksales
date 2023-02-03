const express = require("express");
const app = express();
const database = require("./database");

app.get("/",(req,res)=>{
    database.query("SELECT B.author,B.genre,B.name,B.price,B.image,B.id,FVP.id as FVPid FROM favoriteproducts FVP INNER JOIN books B ON FVP.productId=B.id;")
        .then((rsp)=>{
            res.send(rsp[0]);
        });
});

app.get("/:id",(req,res)=>{
    const id = req.params.id;
    database.query("SELECT B.author,B.genre,B.name,B.price,B.image,B.id,FVP.id as FVPid FROM favoriteproducts FVP INNER JOIN books B ON FVP.productId = B.id WHERE FVP.productId =? ",id).then((rsp)=>{
        res.send(rsp[0]);
    });
});

app.post("/:id",(req,res)=>{
    const id = req.params.id;
    database.query(`SELECT count(*) as Say FROM favoriteproducts WHERE productId = ${id}`).then((rsp)=>{
        const say = rsp[0][0].Say;
        if (say === 0) {
            database.query("INSERT INTO favoriteproducts (productId) VALUES (?) ",id,(err,result)=>{
                if (err){
                    console.log(err);
                }
                else{
                    res.send(result);
                 }
            })
            res.send({result:true});

        }
        else{
            res.send({result:false});
        }
    });
});

app.delete("/:id",(req,res)=>{
    const id = req.params.id;
    database.query("DELETE FROM favoriteproducts WHERE id = ?",id,(err,result)=>{
        if (err){
            console.log(err);
            res.send(false);
        }
        else{
            res.send(result);
        }
    });
    res.send(id);
})



module.exports=app;