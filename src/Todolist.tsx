import React from "react";

// function sum(a: number, b: number) {
//     alert(a + b);
// }

// sum(12,14);

type TasksType = {
    id: number
    title: string
    isDone: boolean
}


type PropsType = {
    title: string
    tasks: Array<TasksType> // ждем массив обьектов типа TasksType
}


export function Todolist(props: PropsType) { //props = { title: "What to learn" второе свойство tasks:[] которое являеться масивом
    return (
        <div>
            <h3>{props.title}</h3>

            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {/* мы берем в props. конкретно в tasks берем [0] элемент и у этого елемента берем свойсвтво .isDone */}
                {/* В span; мы берем в props. конкретно в tasks берем [0] элемент и у этого елемента берем свойсвтво .title */}
                {/*{*/}
                {/*    props.tasks.map((t) => {*/}
                {/*        return <li><input type="checkbox" checked={t.isDone}/>*/}
                {/*            <span>{t.title}</span>*/}
                {/*        </li>*/}
                {/*    })*/}
                {/*}*/}
                <li><input type="checkbox" checked={props.tasks[0].isDone}/><span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/><span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/><span>{props.tasks[2].title}</span></li>

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}