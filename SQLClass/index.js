const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();

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

app.get('/', (req, res)=>{
    let q = `SELECT count(*) FROM user`
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]["count(*)"]);
            res.send("Success");
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
    
});

app.listen("8080", ()=>{
    console.log("Server is listening to port 8080");
});
