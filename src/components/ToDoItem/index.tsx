import React from 'react';
import './ToDoItem.css';

interface ToDoItemProps {
    task: Task;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ task, setTasks }) => {
    const toggleComplete = () => {
        setTasks(prev =>
            prev.map(t => (t.id === task.id ? { ...t, completed: !t.completed } : t))
        );
    };

    const deleteTask = () => {
        setTasks(prev => prev.filter(t => t.id !== task.id));
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={toggleComplete}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
            <button onClick={deleteTask}>Delete</button>
        </li>
    );
}

export default ToDoItem;
