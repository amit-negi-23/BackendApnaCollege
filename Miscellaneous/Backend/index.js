const express = require("express");
const app = express();
const port = 8080;


app.get('/register', (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard Get Request. Welcome ${user}!`)
});

app.post('/register', (req, res) => {
    res.send("Standard Post Request")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});