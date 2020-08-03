import React from 'react';

function GetTasks(props) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    return (
        tasks.map((task) => <div key={task} className = "taskDiv">{task}</div>)
    )
    
}

export default GetTasks;