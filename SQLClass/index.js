const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_app',
    password: 'Kotdwara@123'
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
}

app.get('/', (req, res) => {
    let q = `SELECT count(*) FROM user`
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }

});

app.get('/user', (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let users = result;
            res.render("showusers.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

app.get('/user/:id/edit', (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id ='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

app.patch('/user/:id', (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id ='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            // console.log(user.password)  // check password
            if (formPass != user.password) {
                res.send("Wrong password")
            } else {
                q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.send(result);
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
})

app.get('/user/new', (req, res) => {
    res.render("addNewUser.ejs")
});

app.post('/user/new', (req, res) => {
    let { username, email, password } = req.body;
    try {
        let q = `INSERT INTO user (id, username, email, password) VALUES ('${uuidv4()}','${username}', '${email}', '${password}' )`;
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }

});

app.listen("8080", () => {
    console.log("Server is listening to port 8080");
});
