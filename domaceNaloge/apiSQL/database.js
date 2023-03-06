const sqlite3 = require('sqlite3').verbose();


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

module.exports = db

