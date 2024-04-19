const express = require("express"); //require express
const app = express(); //creating app
const mongoose = require("mongoose"); //reqiure mongoose
const path = require("path"); //require path
const Chat = require("./Models/chat.js");
//const newChat = require("./Models/chat.js");
const methodOverride = require('method-override')

app.set("view engine", "ejs"); //path define
app.set("views",path.join(__dirname, "/views")); //path define

//app.use(express.static("public")); //path for public folder
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded ({ extended : true })); //standard line //middleware
app.use(methodOverride('_method'))//method override


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
    msg: "Done the work",
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

app.get("/chats/new",(req,res)=> {
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
    .then((res) => {
        console.log("chat was saved");
    })
    .catch((err) => {
        console.log(err);
    });

    res.redirect("/chats");
});


//Edit Route
app.get("/chats/:id/edits",async (req,res) =>{
    let {id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});


//Update Route
app.put("/chats/:id",async (req,res)=> { //put request
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let newcontent = req.body.content;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
     {msg: newMsg},
    { runValidators: true, new: true }
    );
    //console.log(updatedChat);
    res.redirect("/chats");
});


//Destry Route
app.delete("/chats/:id",async (req,res)=> { //delete request
    let {id} = req.params;
    let deletedChat= await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});


app.get("/",(req,res) => {
    res.send("root is working"); //connection setup
});

app.listen(3000, () => {
    console.log("server is listening on port 3000"); //port setup
});

