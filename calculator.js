const express = require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var a=Number(req.body.num1);
    var b=Number(req.body.num2);
    var c=a+b;

    res.send("Summation is "+c);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

app.get("/about", function(req, res){
    res.send("<h2>Name: Pasindu Rashmika</h2>");
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
    var a= parseFloat(req.body.weight);
    var b= parseFloat(req.body.height);
    var c= a/(b*b).toFixed(2);
    res.send("<h1>BMI Value is "+c);
});