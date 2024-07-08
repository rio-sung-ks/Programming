
import express from "express"

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    console.log(req.header)
    res.send("Hello, world")
})


app.listen(port,()=>{
    console.log(`the server is running at ${port}`)
})
