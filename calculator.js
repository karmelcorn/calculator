const express = require('express');

const app = express();
app.use(express.urlencoded({extended:true}));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get("/", function(req, res){
  //res.send('Hello World!')
  res.sendFile(__dirname + "/index.html")
  //console.log(__dirname);
});

app.post("/", function(req,res){
  //console.log(req.body)
  // num1 is the name of the field in form in index.html
  var num1 = req.body.num1; // parsed at text
  num1 = Number(num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of the calculation is "+result+ ".")
})

// using server, we no longer access using bmiCalculator.html
// just use route names
app.get("/bmicalculator", function(req, res){
  //res.send('Hello World!')
  res.sendFile(__dirname + "/bmiCalculator.html")
  //console.log(__dirname);
});

app.post("/bmiCalculator", function(req,res){
  console.log(req.body)
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight / (height*height);

  res.send("The result of the bmi calculation is "+result+ ".")
})


app.listen(3000);
