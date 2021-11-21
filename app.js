const express = require('express');
const app=express();
const https = require('https');
app.set('view engine', 'ejs');
app.use(express.static('public'));
/*
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extented:true}));
*/

app.get("/",function(req,res){
  const apiKey="rRkKC2fNScDBWi1yj1KlcPvSokRD1UtzKxdSCYoO"
  const url="https://api.nasa.gov/planetary/apod?api_key="+apiKey;
  https.get(url,function(response){
    console.log(response.statusCode)
    response.on("data",function(data){
      const nasaData=JSON.parse(data);
      const explanation=nasaData.explanation
      const imgUrl=nasaData.url
      const date=nasaData.date;
    

      res.render("index",{title:explanation,imageUrl:imgUrl,dateofdata:date})





    })
  })




})

app.listen(3000,function(){
  console.log("This app is running on 3000");
})
