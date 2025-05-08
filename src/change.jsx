import React from 'react';

const Change = () => {
  const [name, setName] = React.useState('');
  const [select, setSelect] = React.useState('escolha uma opcao');

  function handleClick({ target }) {
    setName(target.value);
  }

  function handleSelect({ target }) {
    setSelect(target.value);
  }

  return (
    <>
      <div>
        <input type="text" onChange={handleClick} value={name} />
        <p>{name}</p>
      </div>
      <div>
        <select onChange={handleSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <p>option: {select}</p>
      </div>
    </>
  );
};

export default Change;
