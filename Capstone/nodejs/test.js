import express from "express";
import bodyParser from "body-parser";
import fs from 'fs'
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
 const filePath = path.join(__dirname, "/views/2.ejs");

const app = express()
const port = 3000;
app.use(express.static('public'));
app.get("/", (req, res, next) => {

  res.render(filePath)

});


app.listen(3000,()=>{
  console.log("port 3000 is servering")
})