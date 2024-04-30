const mongoose = require("mongoose"); //reqiure mongoose
const {Schema} = mongoose;

main()
.then(()=> console.log("connection successful"))//connection setup
.catch((err)=> console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo"); //require mongoose
  }


