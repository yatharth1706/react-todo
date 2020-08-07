import React from 'react';
import GetTasks from './getTasks';

function ShowTasks(props) {
    return (
        <div className="task-lists">
            <h2 className = "mb-3" style={{color: "white"}}>Your Tasks</h2>
            <GetTasks />
        </div>
    )
}

export default ShowTasks;