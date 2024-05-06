const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuid4 } = require("uuid")

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuid4(),
        username: "apnacollege",
        content: "I love coding!"
    },
    {
        id: uuid4(),
        username: "amitnegi",
        content: "I like teaching and coding !"
    },
    {
        id: uuid4(),
        username: "rohitkashyap",
        content: "He is a Php developer !"
    },
];

app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts });
});

app.get('/posts/new', (req, res) => {
    res.render("new.ejs")
})

app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    let id = uuid4();
    posts.push({ id, username, content })
    res.redirect("/posts")
})

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post })
});

app.listen(port, () => {
    console.log("Listening to post : 8080");
});
