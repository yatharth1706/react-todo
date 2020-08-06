import React, {useEffect, useState} from 'react';
import Axios from 'axios';



function GetTasks(props) {  
    const [lists, setLists] = useState([]);
    
    useEffect(() => {
        Axios.get('http://localhost:4000/list').then((list) => {
            setLists(list.data);
        })
    },[]);

    return (
        lists.map((task) => <div key={task.name} className = "taskDiv">{task.name}</div>)
    )

}

export default GetTasks;