import React, { useState } from 'react';
import ToDoList from '../../components/ToDoList';
import ToDoForm from '../../components/ToDoForm';
import ToDoFilter from '../../components/ToDoFilter';
import './App.css';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const [filter, setFilter] = useState<Filter>('All');

    return (
        <div className="todo-app">
            <h1>todos</h1>
            <ToDoForm setTasks={setTasks} />
            <ToDoList tasks={tasks} setTasks={setTasks} filter={filter} />
            <ToDoFilter filter={filter} setFilter={setFilter} />
        </div>
    );
}

export default App;
