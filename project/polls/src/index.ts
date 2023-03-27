import express from 'express';

const app = express();

app.get('/api/polls', (req, res) => {
    console.log(req);

    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
