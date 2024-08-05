import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let user = '';
let password = '';
let subject = '';
let contents = '';
let number = '';
var dic = [];
let list = '';
let indexnumber  = -1;
let deleteValue;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("./index.ejs")
  });

app.get("/test", (req, res) => {
    res.render("./subject.ejs")
});


app.post("/delete", (req, res,next) => {
    deleteValue = req.body.id;
    console.log(deleteValue)
    const index = dic.findIndex(item => item.subject === deleteValue);
    if (index !== -1) {
        dic.splice(index, 1); // 해당 인덱스의 요소를 배열에서 제거
    }
    dic = dic.filter(item => item.subject !== undefined);
    
    res.render("./index.ejs",{
        boardlist : dic
    })
    next();
    console.log(dic);
});


app.post("/submit", (req, res) => {

    indexnumber = indexnumber + 1;
    subject = req.body["fsubject"];    
    if(subject.length >0){
    dic.push(
        {
            subject : subject,
            indexnumber : indexnumber
        }
    )};
    res.render("./index.ejs",{
        boardlist : dic
    })
    console.log(dic)
});

// app.use(listAdd);

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


