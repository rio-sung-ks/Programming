import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let number = 0;
let number1 = 0;
let firtName = '';
let lastName = '';
let test_number = '';

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res,next) => {
  res.render("index.ejs")
});

// function checkletterNumber(req,res,next){
//    firtName = req.body["fName"];
//    lastName = req.body["lName"];
//    number = firtName.length + lastName.length;
  
//   console.log(number);
//   return number;
//   next();
// }

// app.use(checkletterNumber);

app.post("/submit", (req, res) => {
  // let test_number;
  number = req.body["fName"].length + req.body["lName"].length;
    console.log(number);
    res.render("index.ejs",{
      numberOfLetters : number
    })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

