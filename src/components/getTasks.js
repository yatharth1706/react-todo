import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {motion} from 'framer-motion';

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
        isLoading===false ? lists.map((task) => <motion.div key={task.name} className = "taskDiv" whileHover = {{scale : 1.1}} whileTap = {{scale : 0.8}}>{task.name}</motion.div>) : <div><motion.p style={{color: "white"}} animate = {{scale : [2,1,2,2,1,1]}}>Loading...</motion.p></div>
    )

}

export default GetTasks;