import React, {useState} from 'react';
import './App.css';


function App() {

    return (
        <div className="App">
            <Todolist/>
            <Todolist/>
            <Todolist/>
        </div>
    );
}


function Todolist() {

    return (
        <div>
            <h3>What to Learn</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true}/><span>CSS&HTML</span></li>
                <li><input type="checkbox" checked={true}/><span>JS</span></li>
                <li><input type="checkbox" checked={false}/><span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}


export default App;

