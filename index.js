require('dotenv').config()
const express = require('express')

const app = express()

const port = 8000;

app.get("/", (req,res) => {
    res.send('<h1>hello ji</h1>')
});

app.listen(process.env.PORT, () =>{
    console.log(`server running at ${port} `);
    
})