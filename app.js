const express = require('express');

const app = express();

const router = require('./src/routes/reader');

app.use(express.json());

app.use('/readers',router);

// app.get('/', (req, res)=>{
//     res.send('this is working now')
// });


// app.post('', ()=> {

// });

// app.post('/reader', (req, res)=> {
//     res.status(201).json({result: 'working now'})
// });

module.exports = app;


