import axios from 'axios'
import React, { useState, useEffect } from 'react';
import BaseLayout from '../Layouts/BaseLayout'

const Home = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/todos')
            .then(response => {
                const parsedTodos = response.data.todos.map(item => {
                    return {
                        id: item.id,
                        name: `Item Title ${item.id}`,
                        description: item.todo
                    }
                })
                setTodos(parsedTodos)
            })
    }, [])

    return (
        <BaseLayout>
            <div className="flex flex-wrap -mx-4">
                {todos.map(todo => {
                    return (
                        <div key={todo.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="https://via.placeholder.com/600x400" alt="Post Image" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{todo.name}</h2>
                                    <p className="text-gray-600 text-sm mb-4">{todo.description}</p>
                                    <a href="#" className="text-blue-500 hover:underline">See Details</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </BaseLayout>
    )
}

export default Home
