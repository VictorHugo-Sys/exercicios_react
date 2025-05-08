import React from 'react';

const State = () => {
  const [count, setCount] = React.useState(0);

  function negativo() {
    setCount(count - 1);
  }

  function resetar() {
    setCount(0);
  }

  function positivo() {
    setCount(count + 1);
  }

  return (
    <div>
      <div className="count">
        <p>{count}</p>
      </div>
      <div className="botoes">
        <button onClick={negativo}>-1</button>
        <button onClick={resetar}>reset</button>
        <button onClick={positivo}>+1</button>
      </div>
    </div>
  );
};

export default State;
