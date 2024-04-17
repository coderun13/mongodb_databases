const mongoose = require("mongoose"); //reqiure mongoose
const Chat = require("./Models/chat.js");

main().then(()=>{
    console.log("connection successful"); //connection setup
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatup"); //require mongoose
  }

  let allchats = [
    {
        from:"snehal",
        to: "aryan",
        msg: "Hello how are you",
        created_at: new Date(),
    },
    {
        from:"aryan",
        to: "snehal",
        msg: "I am fine.",
        created_at: new Date(),
    },
    {
        from:"snehal",
        to: "megha",
        msg: "Pass the ruler from there",
        created_at: new Date(),
    },
    {
        from:"Megha",
        to: "snehal",
        msg: "Unable to do ed",
        created_at: new Date(),
    },
];

Chat.insertMany(allchats);
