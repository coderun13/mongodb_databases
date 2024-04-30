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

  //adding data
  /*const addOrders = async () => {
   let res =  await Order.insertMany(
    [
        { item:"samosa", price: 12},
        { item:"chips",price:10},
        {item:"chocolate", price:40}
    ]);
        console.log(res);
  };

  addOrders();*/

  //customer schema
 const customerSchema= new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref:"Order",
        },
    ],
});

const Order = mongoose.model("Order", orderSchema);
const customer = mongoose.model("Customer",customerSchema);

const findcustomer = async () => {
    let result = await customer.find({}).populate("orders");
    console.log(result[0]);
};
findcustomer();

//customer data
const addcustomer = async () => {
    let cust1 = new customer({
        name: "aryan singh"
    });

let order1 = await Order.findOne({item: "chips"});
let order2 = await Order.findOne({item: "chocolate"});

//pushing data in database
cust1.orders.push(order1);
cust1.orders.push(order2);

//saving and printing on console
let result = await cust1.save();
console.log(result);
};

//function call
addcustomer();


/*Functions
const findCustomer = async() => {
    let result = await customer.find({}).populate("orders");
    console.log(result[0]);
};


const addCust = async () => {
    let newCust = new customer({
        name: "snehal singh"
    });
    let newOrder = new Order({
        item:"burger",
        price: "250"
    });

newCust.orders.push(newOrder);

await newOrder.save();
await newCust.save();

console.log("added new customer");

}

addCust();*/