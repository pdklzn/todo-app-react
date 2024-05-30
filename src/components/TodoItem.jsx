import React from 'react';

const TodoItem = ({ id, title, completed }) => {
  return (
    <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
      <div className='d-flex justify-content-between'>
        <span className='d-flex align-items-center'>
          <input type='checkbox'  checked={completed}></input>   
          <span className='ms-2'>{title}</span>
        </span>
        <button className='btn btn-danger'>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;