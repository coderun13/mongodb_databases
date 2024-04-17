const express = require("express"); //require express
const app = express(); //creating app
const mongoose = require("mongoose"); //reqiure mongoose
const path = require("path"); //require path


app.set("view engine", "ejs"); //path define
app.set("views",path.join(__dirname, "/views")); //path define


main().then(()=>{
    console.log("connection successful"); //connection setup
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatup"); //require mongoose
  }

  
app.get("/",(req,res) => {
    res.send("root is working"); //connection setup
});


app.listen(3000, () => {
    console.log("server is listening on port 3000"); //port setup
});






