import React from 'react';
import GetTasks from './getTasks';

function ShowTasks(props) {
    return (
        <div className="task-lists">
            {localStorage.getItem('tasks') ? <GetTasks /> : <h2>No Tasks added yet</h2>}
        </div>
    )
}

export default ShowTasks;