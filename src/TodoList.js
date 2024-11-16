import React from 'react';

const TodoList = ({ todoList, deleteHandler, updateHandler, toggleCheckbox }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todoList.map((todo, index) => (
        <li key={index} style={{ marginBottom: '10px', textDecoration: todo.markedForDeletion ? 'line-through' : 'none' }}>
          <input type="checkbox"checked={todo.markedForDeletion}onChange={() => toggleCheckbox(index)}/>&nbsp;
          {todo.text}&nbsp;&nbsp;
          <button onClick={() => deleteHandler(index)}>Delete</button>&nbsp;&nbsp;
          <button onClick={() => updateHandler(index, prompt('Edit Task', todo.text))}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
