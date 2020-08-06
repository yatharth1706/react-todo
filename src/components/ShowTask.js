import React from 'react';
import GetTasks from './getTasks';

function ShowTasks(props) {
    return (
        <div className="task-lists">
            <GetTasks />
        </div>
    )
}

export default ShowTasks;