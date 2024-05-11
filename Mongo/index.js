const mongoose = require("mongoose");

main()
    .then((res) => {
        console.log("connection successful")
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// const user2 = new User({name: "mansi", email: "mansi@gmail.com", age: 28})

// user2.save()
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// });

User.insertMany([
    { name: "Radha", email: "radha@gmail.com", age: 16 },
    { name: "krishna", email: "krishna@gmail.com", age: 17 },
    { name: "sooraj", email: "sooraj@gmail.com", age: 29 }
]).then(res => {
    console.log(res)
})