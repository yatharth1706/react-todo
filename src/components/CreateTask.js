import React, {useState} from 'react';
import Axios from 'axios';
import { motion } from 'framer-motion';



function CreateTask(props) {
    const [task, setTask] = useState('');

    function handleInput(e) {
        e.preventDefault();
        setTask(e.target.value);
    }

    function saveTask(e) {
       e.preventDefault();
       
       Axios.post('http://localhost:4000/add', {
           name : task
       }).then(() => {
            setTask('');
            alert("Saved Successfully"); 
       })
       
    }

    return (
        <>
        <div className="task-input">
            <h2 className = "mb-2" style={{color: "white"}}>Create Task</h2>
            <motion.input type="text" value={task} placeholder = "Type task name" onChange = {handleInput} />
            <motion.button className="btn btn-primary btn-sm" onClick = {saveTask} whileHover = {{scale : 1.1}} whileTap = {{scale : 0.8}}>+</motion.button>
            
        </div>
        
        </>
    )
}

export default CreateTask;