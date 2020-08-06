const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', (req,res) => {
    try {
        Task.find().then((data) => {
            res.send(data);
        });
        
    }catch(e) {
        console.log(e);
    }
})

module.exports = router;