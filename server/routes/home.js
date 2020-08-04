const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


router.post('/', (req,res) => {
    try{
        const newTask = new Task({name : req.body.name})

        newTask.save((task) => {
            res.send(task);
        })
        
    }catch(e) {
        console.log(e);
    }
})

router.get('/list', (req,res) => {
    try {
        Task.find({_id : req.body.id}).then((data) => {
            res.send(data);
        });
        
    }catch(e) {
        console.log(e);
    }
})

module.exports = router;