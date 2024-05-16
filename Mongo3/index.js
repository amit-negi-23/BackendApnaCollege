const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path  = require("path");
const Chat = require('./models/chat.js')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');   
}

main().then(()=>{
    console.log("connection successful")
})
.catch((err)=>{
    console.log(err)
})

let chat1 = new Chat({
    from: "Amit",
    to: "Sooraj",
    msg: "Hello , sir",
    created_at: new Date()
});

chat1.save().then((res)=>{
    console.log(res)
})

app.get('/', (req, res)=>{
    res.send("root is working");
})


app.listen(8080, ()=>{
    console.log("Server is listening on port 8080");
});