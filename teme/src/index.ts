import express, { Request, Response } from 'express';
import {json } from "body-parser";
import { AxiosResponse } from 'axios';
const app = express(); 
app.use(json());
var axios = require('axios');

var config = {
    /* Your settings here like Accept / Headers etc. */
}



app.get("/temelicenta",(req,res)=>{

  axios.get('http://10.97.86.3:3500/users/crtuser')
  .then(function(response: AxiosResponse){
    console.log(response.data);
  }).catch(function(err: Error){
    console.log(err);
  });
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