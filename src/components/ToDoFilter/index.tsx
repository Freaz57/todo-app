import React from 'react';
import './ToDoFilter.css';

interface ToDoFilterProps {
    filter: Filter;
    setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

const ToDoFilter: React.FC<ToDoFilterProps> = ({ filter, setFilter }) => {
    return (
        <div className="footer">
            <button onClick={() => setFilter('All')} className={filter === 'All' ? 'selected' : ''}>All</button>
            <button onClick={() => setFilter('Active')} className={filter === 'Active' ? 'selected' : ''}>Active</button>
            <button onClick={() => setFilter('Completed')} className={filter === 'Completed' ? 'selected' : ''}>Completed</button>
        </div>
    );
}

export default ToDoFilter;
