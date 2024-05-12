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
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
        default: 0
    }
})


const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "NCERT maths",
    author: "SS Verma",
    price: 400
});

book1.save()
.then((res) => {
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})