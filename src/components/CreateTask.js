import React, {useState} from 'react';

function CreateTask(props) {
    const [task, setTask] = useState('');

    function handleInput(e) {
        e.preventDefault();
        setTask(e.target.value);
    }

    return (
        <div class="task-input">
            <input type="text" value={task} placeholder = "Type task name" onChange = {handleInput} />
            <button className="btn btn-primary btn-sm">+</button>
        </div>
    )
}

export default CreateTask;