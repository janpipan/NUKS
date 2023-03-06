const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const db = require('./database.js');





const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const port = 3000;

app.listen(port, () => console.log(`Hello world app listening on ${port}`)); 


// connect to database
const sequelize = new Sequelize('sqlite')

// Poll get request
app.get('/', (req,res) => {
    res.send('Hello world, from express');
});

// Poll post request
app.post('/poll', (req,res) =>{
    const d = new Date();
    console.log(req.body.question)
    let data = {
        question : req.body.question,
        author : req.body.author,
        time : d.getTime(),
        multiple_answers : req.body.multiple_answers,
        add_answers : req.body.add_answers,
    }
    
    let sql = 'INSERT INTO poll (question, author, time, multiple_answers, add_answers) VALUES (?,?,?,?,?)';
    let params = [data.question, data.author, data.time, data.multiple_answers, data.add_answers];

    db.run(sql,params, (err, result) => {
        if (err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id": this.lastID
        })
    })

});



app.use((req,res) =>  {
    res.status(404);
});


