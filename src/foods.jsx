import React from 'react';

const Foods = () => {
  const [foods, setFoods] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  function handleFoods() {
    if (inputValue.trim() !== '') {
      setFoods((prevFoods) => [...prevFoods, inputValue]);
      setInputValue('');
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function enter(event) {
    if (event.key === 'Enter') {
      handleFoods();
    }
  }

  return (
    <div>
      <h3>List of foods</h3>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={enter}
      />
      <button onClick={handleFoods} className='botaoFoods'>Add</button> {}
    </div>
  );
};

export default Foods;
