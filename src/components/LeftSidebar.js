import React from 'react';

function LeftSidebar(props) {
    return (
        <div className="left-sidebar-contents">
            {/* we need buttons to  create a task show tasks */}
            <button className="btn btn-primary">Create Task</button>
            <button className="btn btn-light">Show Tasks</button>
        </div>
    )
}

export default LeftSidebar;