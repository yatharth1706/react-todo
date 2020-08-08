import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {motion} from 'framer-motion';

function GetTasks(props) {  
    const [lists, setLists] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [url, setUrl] = useState('http://localhost:4000/list');
    const [modal, setModal] = useState('false');
    const [modalTask, setModalTask] = useState({});
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

    function openTask(task) {
        setModal('true');
        setModalTask(task);
    }

    return (
    isLoading===false ? modal === 'false' ? lists.map((task) => <><motion.div key={task.name} onClick = {() => openTask(task)} style={{visibility : modal === 'false' ? 'visible' : 'hidden',backgroundColor : task.priority === 'low' ? 'white' : task.priority === 'medium' ? '#8bd494' : '#de6868', color: task.priority === 'low' ? 'black' : task.priority === 'medium' ? 'black' : 'white'}} className = "taskDiv" whileHover = {{scale : 1.1}} whileTap = {{scale : 0.8}}>{task.name}</motion.div></>) : <div className = "modalWindow"><motion.div>
            <h3>{modalTask.name}</h3>
        <p>{modalTask.priority}</p>     
        <i className="fas fa-edit mr-2"></i>
        <i className="fas fa-trash"></i> 
        </motion.div></div> : <div><motion.p style={{color: "white"}} animate = {{scale : [2,1,2,2,1,1]}}>Loading...</motion.p></div>
    )

}

export default GetTasks;