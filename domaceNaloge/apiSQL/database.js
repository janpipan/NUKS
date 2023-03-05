const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('./db/data.db', (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err;
    }
    else {
        console.log('Connected to db.');
        db.run(`CREATE TABLE Poll (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question text,
            author text,
            time text,
            multiple_answers int,
            add_answers  int)`,
        (err) => {
            if (err) {
                console.error(err.message);
            }
            else {
                console.log('Table created');
            }
        });
    }
});

module.exports = db

