import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoContainer from './components/TodoContainer';
import LeftSidebar from './components/LeftSidebar';

function App() {
  return (
    <div className="App">
      <h2>Todo App</h2>
      <TodoContainer left = {<LeftSidebar />}/>
    </div>
  );
}

export default App;
