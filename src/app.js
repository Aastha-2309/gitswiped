const express=require("express");

const app=express();


app.use("/hello",(req,res)=>{
    res.send("hi from server hello");

});



app.use("/test",(req,res)=>{
    res.send("hi from server");

});

app.listen(7777, () => {console.log("succesful");});