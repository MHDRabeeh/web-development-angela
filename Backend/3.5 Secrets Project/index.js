import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import {dirname} from "path"
import { fileURLToPath } from 'url'

const app = express()
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"))


app.get('/',(req,res)=>{
    console.log(__dirname);
    
    res.sendFile(__dirname + "/public/index.html")
})
app.post("/check",(req,res)=>{
    if(req.body.password==="ILoveProgramming"){
        res.sendFile(__dirname + "/public/secret.html")
    }else{
        res.redirect('/')
    }
})

app.listen(port,()=>{
    console.log(`server running successfully on ${port}`);
    
})


//The password is ILoveProgramming
