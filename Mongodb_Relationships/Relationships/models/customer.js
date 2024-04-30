const mongoose = require("mongoose"); //reqiure mongoose
const {Schema} = mongoose;

main()
.then(()=> console.log("connection successful"))//connection setup
.catch((err)=> console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo"); //require mongoose
  }

  //order Schema
  const orderSchema = new Schema({
    item: String,
    price: Number,
  });

  const Order = mongoose.model("Order", orderSchema);

  //adding data
  const addOrders = async () => {
   let res =  await Order.insertMany(
    [
        { item:"samosa", price: 12},
        { item:"chips",price:10},
        {item:"chocolate", price:40}
    ]);
        console.log(res);
  };

  addOrders();


