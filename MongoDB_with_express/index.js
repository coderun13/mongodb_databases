const express = require("express"); //require express
const app = express(); //creating app
const mongoose = require("mongoose"); //reqiure mongoose
const path = require("path"); //require path
const Chat = require("./Models/chat.js");
//const newChat = require("./Models/chat.js");

app.set("view engine", "ejs"); //path define
app.set("views",path.join(__dirname, "/views")); //path define

//app.use(express.static("public")); //path for public folder
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded ({ extended : true })); //standard line //middleware


main().then(()=>{
    console.log("connection successful"); //connection setup
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatup"); //require mongoose
  }


let chat1 = new Chat({
    from:"snehal",
    to: "aryan",
    msg: "Hello how are you",
    created_at: new Date()
});
  
chat1.save().then((res)=> {
    console.log(res);
});


//Index route

app.get("/chats",async(req,res)=> {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

//New Route

app.get("/chats/new/",(req,res)=> {
    res.render("new.ejs");
});
    
//Create Route
    app.post("/chats",(req,res)=> {
        let {from, to, msg} =  req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date(),
        });
       // console.log(newChat);
        //res.send("working");

//saving new chat (async function)
//(when 'then' is used 'async' is not needed)
    newChat.save()
    .then(res => {
        console.log("chat was saved")
    })
    .catch(err => {
        console.log(err);
    });

    res.redirect("/chats");
});


app.get("/",(req,res) => {
    res.send("root is working"); //connection setup
});


app.listen(3000, () => {
    console.log("server is listening on port 3000"); //port setup
});






