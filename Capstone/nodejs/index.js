import express from "express";
import bodyParser from "body-parser";
import fs, { ReadStream } from 'fs'
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
// const subject = '';
// const contents = '';
var dic = [];
let indexnumber  = -1;
let deleteValue;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("./index.ejs")
  });

app.get("/test/:id", (req, res) => {

    let index = parseInt(req.params.id);
    console.log("클릭 index : " + index);
    let subjectItem = dic.find(item=>item.indexnumber === index);
    console.log("클릭 subject : " + subjectItem.subject);

    let filePath = path.join(__dirname, "/views/" + subjectItem.subject + ".ejs");
    console.log("파일경로 : " + filePath);
    if(subjectItem){
        res.render("./"+subjectItem.subject+".ejs",{
            subject : subjectItem.subject,
            contents : subjectItem.contents,             
            indexnumber : subjectItem.indexnumber          
        });
    }
});



app.post("/delete", (req, res,next) => {

    deleteValue = req.body.id;
    console.log("/delete - Deleting Value : " + deleteValue);
    let index = dic.findIndex(item => item.subject === deleteValue);
    console.log("/delete - Delete subject index : " + index);
    //dic 에서 제거. ?? 다른 방법이 있나 ?
    dic = dic.filter(item => item.subject !== undefined);
    
    let deleteItem = dic[index].subject;
    console.log("/delete deleteItem (dic[index].subject) : " + deleteItem);
    // const filePath = path.join(__dirname,deleteItem + ".txt");
    let filePath = path.join(__dirname,"/views/" + deleteItem + ".ejs");


    // 해당 인덱스의 요소를 배열에서 제거
    if (index !== -1) {
        dic.splice(index, 1); 
    }
    // 폴더에서 제거

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("/delete : " + err);
        } else {
            console.log('/delete : File is deleted.');
        }
    });

    res.render("./index.ejs",{
        boardlist : dic
    })

    next();
    console.log("/delete : " + dic);
});

app.post("/submit", async (req, res) => {

    const ejsContent = `
    <!-- index.js 내부에서 subject.ejs 생성용 텍스트로 변환  -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/style/style.css">
</head>
<body>
    <% if (locals.indexnumber) { %>   <h1>Spreading Remark : </h1>
        <form action="/update/<%=indexnumber%>" method="post" id="update-form">
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
        <hr>
    <% } else {%>
        <h1>Spreading Remark : </h1>
        <form action="/update/<%=indexnumber%>" method="post" id="update-form">
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
                <div class="button">
                <input type="submit" value="Update"></div>
            </div>
        </form>

        <br>
<% } %>  
<hr>
<%- include("footer.ejs")  %>
<script type="text/javascript" src="html.js"></script>
</body>
</html>
    `;

    indexnumber += 1;
    let subject = req.body["fsubject"];   
    let contents = req.body["fcontents"];  
    if(subject.length > 0){
        dic.push(
        {
            subject : subject,
            indexnumber : indexnumber,
            contents : contents
        }
    )};

    let filePath = path.join(__dirname, "/views/"+ subject + ".ejs");
    let writeStream = fs.createWriteStream(filePath);  
    
    try{
        await fs.promises.writeFile(filePath,ejsContent);
        console.log("File Created");
    }
    catch(err){
        console.log("File is not created");
    }
    res.render("./index.ejs",{
        boardlist : dic
    })
    
    console.log(dic)
    console.log(dic[indexnumber].subject)
});

app.post("/update/:id",(req,res,next) => {

    let index = parseInt(req.params.id);
    dic[indexnumber].contents = req.body["fcontents"];
    let subjectItem = dic.find(item=>item.indexnumber === index);
    console.log("[update] : " + "[before] : " + dic[indexnumber].contents); 

    // res.render("./"+subjectItem.subject+".ejs",{
    //     contents : dic[indexnumber].contents,
    //     subject : dic[indexnumber].subject,
    //     indexnumber : dic[indexnumber].indexnumber
    //     });

    alert("Successfully Edited")
    console.log(dic)

});

app.listen(port, () => {
console.log(`Listening on port ${port}`);
});
