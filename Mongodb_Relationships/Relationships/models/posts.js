const mongoose = require("mongoose"); //reqiure mongoose
const {Schema} = mongoose;

main()
.then(()=> console.log("connection successful"))//connection setup
.catch((err)=> console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo"); //require mongoose
  }

  //user Schema
  const userSchema = new Schema({
    username: String,
    email:String
  });

  //post Schema
  const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
            ref:"User"
    }
  });

  //creating models
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post",postSchema);







