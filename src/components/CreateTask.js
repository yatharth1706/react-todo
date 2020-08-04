import React, {useState} from 'react';
import Axios from 'axios';

function CreateTask(props) {
    const [task, setTask] = useState('');

    function handleInput(e) {
        e.preventDefault();
        setTask(e.target.value);
    }

    function saveTask(e) {
       e.preventDefault();
       var items;
    //    if(localStorage.getItem('tasks')){
    //        items = JSON.parse(localStorage.getItem('tasks'));
    //        items.push(task);
    //    }else{
    //     items = [];
    //     items.push(task);
    //    }

    //    localStorage.setItem('tasks',JSON.stringify(items));
       
       Axios.post('http://localhost:4000/add', {
           name : task
       }).then(() => {
            setTask('');
            alert("Saved Successfully"); 
       })
       
    }

    return (
        <div className="task-input">
            <input type="text" value={task} placeholder = "Type task name" onChange = {handleInput} />
            <button className="btn btn-primary btn-sm" onClick = {saveTask}>+</button>
        </div>
    )
}

export default CreateTask;