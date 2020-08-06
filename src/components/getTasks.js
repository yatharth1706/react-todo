import React, {useEffect, useState} from 'react';
import axios from 'axios';

function GetTasks(props) {  
    const [lists, setLists] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [url, setUrl] = useState('http://localhost:4000/list');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const list = await axios(url);
            setLists(list.data);
            setLoading(false);
          };
       
          fetchData();
        },[url]
    );

    return (
        isLoading===false ? lists.map((task) => <div key={task.name} className = "taskDiv">{task.name}</div>) : <div><p style={{color: "white"}}>Loading...</p></div>
        
    )

}

export default GetTasks;