const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));  
app.use(express.json())

app.get('/register', (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard Get Request. Welcome @${user}!`)
});

app.post('/register', (req, res) => {
    let { user, password } = req.body;
    res.send(`Standard Post Request. Welcome  @${user} !`)
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});