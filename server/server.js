const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool');

const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, ()=>{
    console.log('Server up on PORT:', PORT);
})

app.get('/tasks', (req, res)=>{
    console.log('in /tasks GET');
    let queryText = `SELECT * FROM "tasks";`;
    pool.query(queryText).then(result =>{
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting tasks', error);
        res.sendStatus(400);
    });
});