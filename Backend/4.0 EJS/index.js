
import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;



function checkDay(){
    let today = new Date();
    let today2 = new Date(Date.now() - 4*24*60*60*1000);
    let day = '';
    let daytype = '';
    let todo = "";
    day = today2
    day = today2.getDay();
    console.log(day)

    if(day == 0 || day == 6){
        console.log("if");
        daytype = "weekend"
        todo = "have a fun"

        app.get("/", (req,res) => {
            res.render(__dirname + "/views/index.ejs",
                {
                    daytype : "weekend",
                    todo : "have a fun"
                }      
            );    
        })
    }

    else{
        app.get("/", (req,res) => {
            res.render(__dirname + "/views/index.ejs",
                {
                    daytype : "weekday",
                    todo : "work hard"
                }      
            );    
        })
    }

    console.log(daytype);
    console.log(todo);
    return daytype,todo;
}
checkDay();

app.use(express.urlencoded({ extended: true }));
app.get("/", (req,res) => {
    res.render(__dirname + "/views/index.ejs",
        {
            daytype : "weekend",
            todo : "have a fun"
        }      
    );    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

