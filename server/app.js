const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('dotenv').config({
    path: './.env'
});
require('./mongoose');

app.use(express.urlencoded({extended : false}));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/list', require('./routes/list'));
app.use('/add', require('./routes/home'));

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})