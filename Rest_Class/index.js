const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuid4 } = require("uuid")
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuid4(),
        username: "Radha",
        content: "I love coding!"
    },
    {
        id: uuid4(),
        username: "amitnegi",
        content: "I like teaching and coding !"
    },
    {
        id: uuid4(),
        username: "Krishna",
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

app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    console.log(id)
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post)
    res.redirect("/posts")
})

app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post })
})

app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts")
})

app.listen(port, () => {
    console.log("Listening to post : 8080");
});
