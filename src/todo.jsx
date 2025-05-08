import React from 'react';

const Todo = () => {
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState('');
  const [doneTasks, setDoneTasks] = React.useState([]);

  function add() {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  }

  function handleChange({ target }) {
    setInput(target.value);
  }

  function dlt(index) {
    const update = tasks.filter((_, i) => i !== index);
    setTasks(update);
  }

  function done(index) {
    if (doneTasks.includes(index)) {
      setDoneTasks(doneTasks.filter((i) => i !== index));
    } else {
      setDoneTasks([...doneTasks, index]);
    }
  }

  function enter(event) {
    if (event.key === 'Enter') {
      add();
    }
  }

  return (
    <>
      <h3>To-do-List</h3>
      <div>
        <input
          type="text"
          placeholder="enter a task"
          onChange={handleChange}
          value={input}
          onKeyDown={enter}
        />
        <button onClick={add}>Add</button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="task"
              style={{
                textDecoration: doneTasks.includes(index)
                  ? 'line-through'
                  : 'none',
              }}
            >
              {task}
              <div className="taskButton">
                <button onClick={() => dlt(index)} id='delete'>delete</button>
                <button onClick={() => done(index)} id='done'>done</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
