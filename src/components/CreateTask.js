import React, {useState} from 'react';

function CreateTask(props) {
    const [task, setTask] = useState('');

    function handleInput(e) {
        e.preventDefault();
        setTask(e.target.value);
    }

    function saveTask(e) {
       e.preventDefault();
       var items;
       if(localStorage.getItem('tasks')){
           items = JSON.parse(localStorage.getItem('tasks'));
           items.push(task);
       }else{
        items = [];
        items.push(task);
       }

       localStorage.setItem('tasks',JSON.stringify(items));
       setTask('');
       alert("Saved Successfully"); 
    }

    return (
        <div class="task-input">
            <input type="text" value={task} placeholder = "Type task name" onChange = {handleInput} />
            <button className="btn btn-primary btn-sm" onClick = {saveTask}>+</button>
        </div>
    )
}

export default CreateTask;