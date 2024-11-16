import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  const changeHandler = (e) => {
    setTask(e.target.value);
    setError('');
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      setError('Please enter a Value');
      return;
    }
    const newTodos = [...todos, { text: task, markedForDeletion: false }];
    setTodos(newTodos);
    setTask('');
  };
  const deleteHandler = (indexValue) => {
    const newTodos = todos.map((todo, index) =>
      index === indexValue ? { ...todo, markedForDeletion: true } : todo
    );
    setTodos(newTodos);
  };
  const updateHandler = (indexValue, newText) => {
    const newTodos = todos.map((todo, index) =>
      index === indexValue ? { ...todo, text: newText, markedForDeletion: false } : todo
    );
    setTodos(newTodos);
  };
  const toggleCheckbox = (indexValue) => {
    const newTodos = todos.map((todo, index) =>
      index === indexValue ? { ...todo, markedForDeletion: !todo.markedForDeletion } : todo
    );
    setTodos(newTodos);
  };
  const selectAllHandler = () => {
    const newTodos = todos.map((todo) => ({ ...todo, markedForDeletion: true }));
    setTodos(newTodos);
  };
  const deleteAllSelectedHandler = () => {
    const newTodos = todos.filter((todo) => !todo.markedForDeletion);
    setTodos(newTodos);
  };
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Todo Task's</h3>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={task} onChange={changeHandler} />&nbsp;&nbsp;
              <input type="submit" value="Add" name="Add" />
              {error && (<p style={{border: '1px solid red',borderRadius: '4px',padding: '4px 8px',color: 'red',
                    display: 'inline-block',marginTop: '10px',fontSize: '14px',}}>{error}</p>)}
            </form>
            <button onClick={selectAllHandler}>Select All</button>&nbsp;&nbsp;
            <button onClick={deleteAllSelectedHandler}>Delete All</button>
            <TodoList todoList={todos} deleteHandler={deleteHandler} updateHandler={updateHandler} toggleCheckbox={toggleCheckbox} />
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;
