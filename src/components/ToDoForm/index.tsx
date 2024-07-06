import React, { useState } from 'react';
import './TodoForm.css'

interface ToDoFormProps {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ setTasks }) => {
    const [input, setInput] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            setTasks(prev => [...prev, { id: Date.now(), text: input, completed: false }]);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What needs to be done?"
            />
        </form>
    );
}

export default ToDoForm;
