import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {

    const todos = [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: true },
    ]

    return (
        <ul className='list-group'>
            {todos.map(todo => (
                <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>
            ))}
        </ul>
    );
};

export default TodoList;