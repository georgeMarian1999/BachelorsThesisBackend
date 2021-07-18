import express from "express";
import {json } from "body-parser";

const app = express(); 
app.use(json());


app.get("/temelicenta",(req,res)=>{
  res.send(
    [
    {
     "type": "Informatica",
     "title" : "Microservices",
    },
    {
      "type": "Matematica",
      "message" : "Statistica",
     },
     {
      "type": "Informatica",
      "message" : "Inteligenta artificiala",
     },
  ]);
})


app.listen(3501,()=>{
  console.log("Listening on port 3501")
})