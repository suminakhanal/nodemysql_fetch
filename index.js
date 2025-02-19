const express = require("express");
const mysql= require("mysql2");
const app = express();

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "sumina123",
    database:"mysqlnode"


})

con.connect((err)=>{
   if (err)
   {
    console.log(err)
   }else{
    console.log("Connected ")
   }
})

app.get("/fetch" ,(req, res)=>{
    con.query("select * from mytable", function(err, result, fields){
        if(err)
        {
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(3000, (err)=> {
    if(err)
    {
        console.log(err)
    }else{
        console.log("Connected on port 3000")
    }
})