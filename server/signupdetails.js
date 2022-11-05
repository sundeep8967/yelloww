var express=require("express")
var bodyparser=require("body-parser")
var mongoose=require("mongoose")
const { Db } = require("mongodb")
const { devNull } = require("os")
const fs = require('fs')

const app=express()


app.use(bodyparser.json())
app.use(express.static('public'))
app.use(bodyparser.urlencoded({extended:true}))

const URI='mongodb+srv://splitwise:splitwise@cluster0.mcuaqza.mongodb.net/?retryWrites=true&w=majority';

const connectDB=async()=> {
    
    await mongoose.connect(URI,{useUnifiedTopology:true, useNewUrlParser:true});

    console.log("connected")
}

db.on('error',()=>console.log("error in connection to database"));
db.once('once',()=>console.log("connected to database"));

app.post("/signup",(req,res)=>{
    var email_id=req.body.user_id
    var upi_id= req.body.upi_id
    var password=req.body.password

    var data={
<<<<<<< HEAD:client/signupdetails.js
        
=======
>>>>>>> 422275b39d3936257c7a0681ad014abc013a8f55:server/signupdetails.js
        "email_id":email_id,
        "upi_id":upi_id,
        "password":password
    }
    
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
      console.log("record inserted successfully");
    });
})

app.get("/",(req,res)=>{
 
    res.send("hello from the server")
    return res.redirect('secondpage.html');  
}).listen(3000)

console.log("listening to portal 3000")