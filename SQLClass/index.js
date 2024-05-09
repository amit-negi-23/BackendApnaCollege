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

let data = [];
for(i=1;  i<=100; i++ ){
  data.push(getRandomUser());
}

let q = `INSERT INTO user (id, username, email, password) VALUES ? `;

try {
    connection.query(q, [data],(err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}

connection.end();
