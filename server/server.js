const express = require('express');
const app = express();
const path = require('path');
import grafanaController from './controllers/grafanaController';


const PORT = 4000;



app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'))
})

app.post('/graf', grafanaController.getKey, (req, res) => {
    return res.send([]);
})

app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`)
});