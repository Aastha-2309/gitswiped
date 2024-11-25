const express=require("express");

const app=express();



app.get("/user",(req,res)=>{
    res.send({firstname:"Aastha", lastName:"Rai"});
});

app.use("/user",(req,res)=>{
    res.send("hi from server hello");

});



app.post("/user",(req,res)=>{
    console.log("saved data from db");
    res.send("succesfully saved");

});





app.delete("/user",(req,res)=>{
    console.log("saved data from db");
    res.send("details deleted");

});



app.use("/test",(req,res)=>{
    res.send("hi from server");

});

app.listen(7777, () => {console.log("succesful");});