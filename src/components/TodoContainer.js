import React, {useState} from 'react';

function TodoContainer(props){
    const [toShow, setToShow] = useState('welcome');

    return (
        <div className="container mt-5 todoContainer">
            {/* Inside this we will include two sidebar windows */}
            <div className="left-sidebar">
                {props.left}
            </div>
            <div className="right-sidebar">
                {props.right}
            </div>
        </div>
    )
}

export default TodoContainer;