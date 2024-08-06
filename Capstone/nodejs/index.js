import express from "express";
import bodyParser from "body-parser";
import fs from 'fs'
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

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

app.get("/test/:id", (req, res) => {

    const index = parseInt(req.params.id);
    const subjectItem = dic.find(item=>item.indexnumber === index);
    const filePath = path.join(__dirname, "/views/" + subjectItem.subject + ".ejs");
    if(subjectItem){
        res.render("./"+subjectItem.subject+".ejs",{
            contents : subjectItem.contents,
            subject : subjectItem.subject
        });
    }
});

app.post("/delete", (req, res,next) => {

    deleteValue = req.body.id;
    console.log("Deleting Value : " + deleteValue);
    const index = dic.findIndex(item => item.subject === deleteValue);
    console.log("Delete subject index : " + index);
    //dic 에서 제거. ?? 다른 방법이 있나 ?
    dic = dic.filter(item => item.subject !== undefined);
    
    const deleteItem = dic[index].subject;
    console.log("deleteItem (dic[index].subject) : " + deleteItem);
    // const filePath = path.join(__dirname,deleteItem + ".txt");
    const filePath = path.join(__dirname,"/views/" + deleteItem + ".ejs");

    // 해당 인덱스의 요소를 배열에서 제거
    if (index !== -1) {
        dic.splice(index, 1); 
    }
    // 폴더에서 제거

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('File is deleted.');
        }
    });

    res.render("./index.ejs",{
        boardlist : dic
    })

    next();
    console.log(dic);
});

app.post("/submit", (req, res) => {

    const ejsContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/style/style.css">
    </head>
    <body>
        <% if (locals.boardlist) { %>   <h1>Spraeding Remark : </h1>
            <form action="/submit" method="post">
                <!-- <p>user : <input type="text" name = "fuser"></p>
                <p>password : <input type="text" name = "fpassword"></p> -->
                <div>
                    <table class="table">
                        <tr class="top">
                            <td class="left">Spreading Remark : </td>
                            <td class="right"><input type="text" maxlength="20" name = "fsubject" placeholder="제목을 입력하세요" style="width:420px;"></td>
                        </tr>
                        <tr class="bottom">
                            <td class="left"><p>Issue : </p></td>
                            <td class="right"><textarea id="user-input" name="fcontents" rows="6" cols="50" placeholder="Enter your text here..."></textarea></td>
                        </tr>         
                    </table>
                    <div class="button"><input type="submit" value="Update"></div>
                </div>
            </form>
            <!-- fsubject list -->
            <br>
            <hr>
            <!-- index.ejs 로 다시 던지고 아래 리스트 업데이트 -->
        <% } else {%>
            <h1>Spraeding Remark : </h1>
            <form action="/submit" method="post">
                <!-- <p>user : <input type="text" name = "fuser"></p>
                <p>password : <input type="text" name = "fpassword"></p> -->
                <div>
                    <table class="table">
                        <tr class="top">
                            <td class="left">Spreading Remark : </td>
                            <td class="right"><input type="text" maxlength="20" name = "fsubject" placeholder="제목을 입력하세요" value="<%= subject%>" style="width:420px;"></td>
                        </tr>
                        <tr class="bottom">
                            <td class="left"><p>Issue : </p></td>
                            <td class="right"><textarea id="user-input" name="fcontents" rows="6" cols="50" placeholder="Enter your text here..."><%= contents %></textarea></td>
                        </tr>         
                    </table>
                    <div class="button"><input type="submit" value="Update"></div>
                </div>
            </form>

            <br>
    <% } %>  

    <!-- Footer goes here -->
    <hr>
    <%- include("footer.ejs")  %>
    <!-- <script>
    function remove(){
        document.getElementById("remove").parentNode.remove();
    }
    </script> -->
    </body>
    </html>
    `;

    indexnumber = indexnumber + 1;
    subject = req.body["fsubject"];   
    contents = req.body["fcontents"]; 
    if(subject.length >0){
    dic.push(
        {
            subject : subject,
            indexnumber : indexnumber,
            contents : contents
        }
    )};

    const filePath = path.join(__dirname, "/views/"+ subject + ".ejs");
    var writeStream = fs.createWriteStream(filePath);    
    fs.writeFile(filePath,ejsContent,(err)=>{
        if(err){
            console.log("EJS file NOT created")
        }
        else{
            console.log("EJS file created")
        }
    })    
    
    res.render("./index.ejs",{
        boardlist : dic
    })
    console.log(dic)
});

app.post("/update/:id",(req,res,next) => {

    const index = parseInt(req.params.id);
    const subjectItem = dic.find(item=>item.indexnumber === index);
    console.log(contents);
    subjectItem.contents =  req.body["fcontents"];
    console.log(contents);
});


app.listen(port, () => {
console.log(`Listening on port ${port}`);
});
