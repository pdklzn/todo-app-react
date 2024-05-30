import React, { useState } from 'react';

const AddTodoForm = () => {
    const [value, setValue] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(`Ввел: ${value}`)
    }
    return (
        <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
            <input 
            className='form-control mb-2 mr-sm-2' 
            type="text" 
            placeholder='Add todo...' 
            value={value}
            onChange={e => setValue(e.target.value)}
            />
            <button className='btn btn-success mb-2'>Submit</button>
        </form>
    );
};

export default AddTodoForm;