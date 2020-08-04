const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use('/add', require('./routes/home'));

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})