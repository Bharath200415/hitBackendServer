const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/sum",function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    const sum = parseInt(a)+parseInt(b);
    res.send(sum.toString());
})

app.get("/interest",function(req,res){
    const principal = parseInt(req.query.p);
    const rate = parseFloat(req.query.r);
    const time = parseInt(req.query.t);
    const interest = (principal*rate*time)/100;
    res.send(interest.toString());
})

app.listen(3000,function(req,res){
    console.log("listening..")
})