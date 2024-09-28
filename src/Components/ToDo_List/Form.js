import React from 'react';

const Form = ({ input, setInput, addTodo }) => (
  <form onSubmit={addTodo}>
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="task-input"
      placeholder="Add a new task..."
    />
    <button type="submit" className="button-add">Add Task</button>
  </form>
);

export default Form;