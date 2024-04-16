const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(()=>{
    console.log("successful connection");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});