const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use('/api', require('./routes'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));


const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`listening on ${port}`));

db.seed();