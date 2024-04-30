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

/*const getData = async () =>{
    let result = await Post.findOne({}).populate("user","username");
    console.log(result);
};

getData();*/

//adding data
const addData = async () =>{
    let user = await User.findOne({username: "snehalsingh"});
        
         /*let user1 = new User({
        username: "snehalsingh",
        email: "snehal01@gmail.com", //already created in database
    });

    let post1 = new Post({
        content: "Hello World!",
        likes: 7
    });*/

    let post2 = new Post({
        content: "Bye Bye!",
        likes: 3
    });


   // post1.user = user1;
   post2.user = user;

    //saving data to database

   // await user1.save();
    //await post1.save();
    await post2.save();
}






