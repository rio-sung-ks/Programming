import express from "express";
import bodyParser from "body-parser";
import fs from 'fs'
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express()
const port = 3000;
app.use(express.static('public'));
app.get("/", (req, res, next) => {

  // indexnumber = indexnumber + 1;
  // subject = req.body["fsubject"];   
  // contents = req.body["fcontents"]; 
  // if(subject.length >0){
  // dic.push(
  //     {
  //         subject : subject,
  //         indexnumber : indexnumber,
  //         contents : contents
  //     }
  // )};

  // const filePath = path.join(__dirname, subject + ".txt");
  res.render("./edit.ejs")
  // console.log(dic)
});

app.listen(3000,()=>{
  console.log("port 3000 is servering")
})