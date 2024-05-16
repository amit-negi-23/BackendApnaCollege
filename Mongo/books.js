const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

main()
    .then((res) => {
        console.log("connection successful")
    })
    .catch((err) => console.log(err));

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
        lowercase: true
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1
    },
    discount: {
        type: Number,
        default: 0
    }
})


const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Wings of FIRE",
    author: "APJ Abdul Kalam",
    price: 400
});

Book.findByIdAndUpdate('6644533ffac4ccee4255ed4c',{price: 600},{runValidators: true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
})

// book1.save()
// .then((res) => {
//     console.log("res",res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// Book.findOne({title: "WINgS OF FIRE"})
// .then((res)=>{
//     console.log(res)

// })