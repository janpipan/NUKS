const sqlite3 = require('sqlite3').verbose();
const Sequelize = require('sequelize');



let db = new sqlite3.Database('./apiSQL/db/data.db', (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err;
    }
    else {
        console.log('Connected to db.');
    }
});

const sequelize = new Sequelize('sqlite://./apiSQL/db/data.db');

module.exports = sequelize;

