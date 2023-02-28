// following tutorial from https://stackabuse.com/building-a-rest-api-with-node-and-express/

const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Hello world app listening on ${port}`);
});