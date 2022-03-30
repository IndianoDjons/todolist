import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";


function App() {

    let tasks1 = [ //массив тасок в котором есть обьекты
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "Js", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Redux", isDone: false},

    ]
    let tasks2 = [ //массив тасок в котором есть обьекты
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: true},


    ]


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="Songs" tasks={tasks2}/>

            {/*<html>TS2322: Type '{ title: string; tasks: { id: number; title: string; isDone: boolean; }[]; }' is not assignable to type 'IntrinsicAttributes &amp; PropsType'.<br/>Property 'tasks' does not exist on type 'IntrinsicAttributes &amp; PropsType'.*/}

            {/*<Todolist title="Songs"/>*/}


            {/*<input type="checkbox"/>*/}
            {/*<input type="date"/>*/}
            {/*<input placeholder="it-incubator"/>*/}

        </div>
    );
}


export default App;

