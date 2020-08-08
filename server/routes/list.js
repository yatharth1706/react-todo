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

router.get('/:taskId', (req,res) => {
    try {
        Task.find({_id:req.params.taskId}).then((foundTask) => {
            res.send(foundTask);
        })
    }catch(e) {
        console.log(e);
    }
})

module.exports = router;