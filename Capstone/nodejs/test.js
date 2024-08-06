import express from "express";
import bodyParser from "body-parser";
import fs from 'fs'
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url)); 
const app = express()
const port = 3000;
app.use(express.static('public'));
app.get("/", (req, res, next) => {

  const filePath = path.join(__dirname, "views", "edit.ejs");

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // 파일을 읽는 중에 오류가 발생하면 `err` 인자로 에러 객체가 전달된다.
      console.error(err);
      return;
    }
    // 파일 읽기에 성공하면 `data` 로 파일의 내용이 전달된다.
    // res.send(data)
    console.log(data);
  });


  // res.render("./edit.ejs")
  // console.log(dic)
});

app.listen(3000,()=>{
  console.log("port 3000 is servering")
})