const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { set } = require('mongoose');


router.patch('/:taskId', (req,res) => {
    try{
        Task.findOneAndUpdate({_id : req.params.taskId},{
            $set : req.body
        }).then((updatedTask) => {
            res.send(updatedTask);
        }).catch((e) => {
            res.send(e);
        })
        
    }catch(e) {
        console.log(e);
    }
})

module.exports = router;