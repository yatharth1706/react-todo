import React from 'react';
import Axios from 'axios';

function GetTasks(props) {
    let tasks;
    Axios.get('http://localhost:4000/add/list').then((list) => {
        tasks = list;
    })
    // let tasks = JSON.parse(localStorage.getItem('tasks'));
    return (
        tasks.map((task) => <div key={task} className = "taskDiv">{task}</div>)
    )
    
}

export default GetTasks;