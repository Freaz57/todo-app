import React from 'react';
import ToDoItem from '../ToDoItem';
import './ToDoList.css';

interface ToDoListProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    filter: Filter;
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks, setTasks, filter }) => {
    const filteredTasks = tasks.filter(task => {
        if (filter === 'Active') return !task.completed;
        if (filter === 'Completed') return task.completed;
        return true;
    });

    return (
        <ul>
            {filteredTasks.map(task => (
                <ToDoItem key={task.id} task={task} setTasks={setTasks} />
            ))}
        </ul>
    );
}

export default ToDoList;
