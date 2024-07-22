import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandGenerator(req,res,next){
  
  bandName = req.body["street"] + req.body["pet"];
  // bandName = req.body.street + req.body.pet;
  next();
}

app.use(bandGenerator);

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit",(req,res)=>{
  
  res.send(`your band name is : ${bandName}`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
