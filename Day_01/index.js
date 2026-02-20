import 'dotenv/config'; 
import express from 'express';

const app = express()

const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send("Server is Ready");
})

app.get('/login',(req,res)=>{
    res.send("Why Do you fear when harsh is here ?");
})

app.listen(port,()=>{
    console.log(`Server is running at Port ${port}`)
})