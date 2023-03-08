const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database.js');
//const Poll = require('./poll.js')
const {Poll, Answer} = require('./models.js')

//sequelize.sync({force: true}).then(() => console.log('db is ready'));
sequelize.sync().then(() => console.log('db is ready'));


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const port = 3000;

app.listen(port, () => console.log(`Server is listening on ${port}`)); 



// Polls get request
app.get('/polls', async (req,res) => {
    const users = await Poll.findAll();
    res.send(users);
});

// Poll get request
app.get('/polls/:id', async (req, res) => {
    const pollId = req.params.id;
    const user = await Poll.findOne({ where: { id: pollId}});
    res.send(user);
});

// Poll post request
// async operation

app.post('/poll', async (req,res) => {
    await Poll.create(req.body);
    res.send('Poll is created');
})
/*
app.post('/poll', (req,res) =>{
    Poll.create(req.body).then(() => {
        res.send('Poll is created');
    })
});
*/

// Poll update request
app.put('/polls/:id', async (req,res) => {
    const pollId = req.params.id;
    const poll = await Poll.findOne({ where: {id : pollId}});
    console.log(req.body.question);
    poll.question = req.body.question;
    await poll.save();
    res.send('Poll is updated');
});

app.delete('/polls/:id', async (req, res) => {
    const pollId = req.params.id;
    await Poll.destroy({where: {id: pollId}});
    res.send('Poll deleted');
});
/*
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
*/


app.use((req,res) =>  {
    res.status(404);
});

