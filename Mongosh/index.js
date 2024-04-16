const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(()=>{
    console.log("successful connection");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');`
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User",userSchema);

const user1 = new User({
    name: "adam",
    email: "adam123@gmail.com",
    age: 34,
});

user1.save();

const user2 = new User({
    name: "bob",
    email: "bob123@gmail.com",
    age: 20,
});

User.updateOne({name: "adam"},{age: 25})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

user2
    .save()
    .then((res)=> {
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });

/*User.find({}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});*/


/*User.find({age: {$gt: 30}})
.then((res)=>{
    console.log(res[0].name);
}).catch((err)=>{
    console.log(err);
});
*/
