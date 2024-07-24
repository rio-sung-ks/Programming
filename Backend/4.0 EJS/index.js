
import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

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

function checkDay(){
    let today = new Date();
    let yesterday = new Date(Date.now() - 24*60*60*1000);
    day = today.getDay();
    let todo = ""
    if(day === 0 || 6){
        daytype = "weekend"
        todo = "have a fun"
    }
    else{
        daytype = "weekday"
        todo = "work hard"
    }
}


