const express = require('express');
const app = express();

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
});

app.get('/', (req, res)=>{
    res.send("<h1>Home Page</h1>");
});


app.get('/:page/', (req, res)=>{
    console.log(req.params)
    res.send(`<h1>Welcome to ${req.params.page} Page</h1>`);
});
// app.get('/blog', (req, res)=>{
//     res.send("<h1>Blog Page</h1>");
// });

// app.get('/service', (req, res)=>{
//     res.send("<h1>Service Page</h1>");
// });

// app.get('/contact', (req, res)=>{
//     res.send("<h1>Contact us Page</h1>");
// });

// app.get("*", (req, res)=>{
//     res.send("<h1>Page not found</h1>")
// })


// app.post("/", (req, res)=>{
//     res.send("your request is successful")
// })




// app.use((req, res) => {
//     console.log("Request received")
    
//     res.send("Amit negi")

//     res.send({
//         name: "Amit negi",
//         email: "amit@gmail.com",
//         phone: 123456789
//     })
// });