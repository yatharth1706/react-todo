import React from 'react';
import {motion} from 'framer-motion';

function LeftSidebar(props) {
    return (
        <div className="left-sidebar-contents">
            {/* we need buttons to  create a task show tasks */}
            <motion.button className="btn btn-primary" onClick = {() => props.toChangeShow("create")} whileHover = {{scale : 1.02}} whileTap = {{scale : 0.9}}>Create Task</motion.button>
            <motion.button className="btn btn-light" onClick = {() => props.toChangeShow("show")} whileHover = {{scale : 1.02}} whileTap = {{scale : 0.9}}>Show Tasks</motion.button>
        </div>
    )
}

export default LeftSidebar;