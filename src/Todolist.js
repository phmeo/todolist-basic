import React, { useState } from 'react';

function Todolist() {
    const [tasks, setTasks] = useState(["Eat", "Sleep", "Repeat"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event){
        setNewTask(event.target.value);
    
    }

    function addtask(){

        if (newTask.trim() !== "") {
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        if(index > 0 ) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]
            setTasks(updatedTask);

        }
    }

    function moveTaskDown(index){
        if(index < tasks.length -1 ) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]]
            setTasks(updatedTask);

        }
    }

    return (
        <div className='todolist'>
            <h1>Todo List</h1>
            <div>
                <input type='text' value={newTask} onChange={handleInputChange} placeholder='Add a new task'/>
                <button className='add-button' onClick={addtask}>Add</button>
            </div>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}><span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='move-up-button' onClick={() => moveTaskUp(index)}>Up</button>
                        <button className='move-down-button' onClick={() => moveTaskDown(index)}>Down</button>
                        </li>
                    )}
                </ol>
        </div>
    )
}
export default Todolist;