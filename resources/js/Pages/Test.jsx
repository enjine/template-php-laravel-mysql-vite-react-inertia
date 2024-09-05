import React, { useState, useEffect } from 'react';
import BaseLayout from '../Layouts/BaseLayout'

const Home = () => {
    const [todos, setTodos] = useState([]);

    async function fetchTodos() {
        const resp = await fetch('/todos');
        const data = await resp.json();
        console.log(data);
        setTodos(data);
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <BaseLayout>
            <div className="flex flex-wrap -mx-4">
                {todos.map(todo => (
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={todo.id}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/600x400" alt="Post Image" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{todo.todo}</h2>
                            <p className="text-gray-600 text-sm mb-4">{todo.completed ? 'Completed' : 'Not Completed'}</p>
                            <a href="#" className="text-blue-500 hover:underline">User Id: {todo.userId}</a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </BaseLayout>
    )
}

export default Home
