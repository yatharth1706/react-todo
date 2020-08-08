const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


router.post('/', (req,res) => {
    try{
        const newTask = new Task({name : req.body.name, priority : req.body.priority})

        newTask.save((task) => {
            res.send(task);
        })
        
    }catch(e) {
        console.log(e);
    }
})



module.exports = router;