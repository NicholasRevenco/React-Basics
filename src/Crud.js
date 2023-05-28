import './App.css';
import { useState } from "react";

export const Crud = () => {

    const [toDoList, setToDoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        const newToDoList = [...toDoList, newTask];
        setToDoList(newToDoList);
        console.log(newToDoList);
    }
    
    return (
        <div className="App">
            <div className="addTask">

                <input onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>

            </div>
            <div className="list">
                {toDoList.map((task, key) => {
                    return <h1 key={key}>{task}</h1>
                })}
            </div>
        </div>
    )
}