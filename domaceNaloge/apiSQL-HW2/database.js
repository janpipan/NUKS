const sqlite3 = require('sqlite3').verbose();
const Sequelize = require('sequelize');


// create new sqlite database

let db = new sqlite3.Database('./apiSQL-HW2/db/data.db', (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err;
    }
    else {
        console.log('Connected to db.');
    }
});

// create connection to database
const sequelize = new Sequelize('sqlite://./apiSQL-HW2/db/data.db');

module.exports = sequelize;

