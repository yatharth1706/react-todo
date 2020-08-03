import React from 'react';

function ShowTasks(props) {
    return (
        <div className="task-lists">
            {localStorage.getItem('tasks') ? <h2>Yes</h2> : <h2>No Tasks added yet</h2>}
        </div>
    )
}

export default ShowTasks;