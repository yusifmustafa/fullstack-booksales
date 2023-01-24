const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
 const books = require("./books");
const basketProducts = require("./basketProducts");
app.use(express.json());

app.use(cors({
    origin:"*",
    methods:["GET","PUT","POST","DELETE"],
}));

app.use("/",books);
app.use("/api/basketproducts",basketProducts);



const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});
