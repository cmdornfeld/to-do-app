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
    let queryText = `SELECT * FROM "tasks" ORDER BY "id";`;
    pool.query(queryText).then(result =>{
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting tasks', error);
        res.sendStatus(400);
    });
});

app.post('/tasks', (req, res)=>{
    console.log('in /tasks POST', req.body);
    let task = req.body;
    let queryText = `INSERT INTO "tasks" ("task") VALUES ($1);`;
    pool.query(queryText, [task.task]).then(result=>{
        res.sendStatus(200);
    }).catch(error =>{
        res.sendStatus(400);
        console.log('error adding task', error);
    });
});

app.delete('/delete/:id', (req, res)=>{
    let id = req.params.id;
    console.log('DELETE route hit with id:', id);
    let queryText = `DELETE FROM "tasks" WHERE "id" = $1;`;
    pool.query(queryText, [id]).then(result =>{
        res.sendStatus(200);
    }).catch(error =>{
        console.log(error);
        res.sendStatus(400);
    });
});

app.put('/complete/:id', (req, res)=>{
    let id = req.params.id;
    let task = req.body;
    let status = task.status;
    let queryText = ``;
    console.log('Editing id:', task, id);
    if (status === 'Incomplete'){
        queryText = `UPDATE "tasks" SET "status" = 'Complete' WHERE id = $1;`;
    } else if (status === 'Complete'){
        queryText = `UPDATE "tasks" SET "status" = 'Incomplete' WHERE id = $1;`;
    }
    pool.query(queryText, [id]).then(result =>{
        res.sendStatus(200);
    }).catch(error =>{
        console.log(error);
        res.sendStatus(400);
    });
});