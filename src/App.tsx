import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";


function App() {

    let tasks1 = [ //массив тасок в котором есть обьекты
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "Js", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},


    ]
    let tasks2 = [ //массив тасок в котором есть обьекты
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: true},
        {id: 3, title: "Yo", isDone: false},


    ]


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="Songs" tasks={tasks2}/>



            {/*<Todolist title="Songs"/>*/}


            {/*<input type="checkbox"/>*/}
            <input type="date"/>
            <input placeholder="it-incubator"/>
            <input type="button" value="text inside button"/>

        </div>
    );
}


export default App;

