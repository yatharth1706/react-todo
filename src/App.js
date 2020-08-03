import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoContainer from './components/TodoContainer';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

function App() {
  const [toShow, setToShow] = useState('welcome');

  return (
    <div className="App">
      <h2>Todo App</h2>
      <TodoContainer left = {<LeftSidebar />} right = {<RightSidebar toshow={toShow} />}/>
    </div>
  );
}

export default App;
