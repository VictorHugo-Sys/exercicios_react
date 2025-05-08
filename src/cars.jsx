import React, { useRef } from 'react';

const Cars = () => {
  const [cars, setCars] = React.useState([]);
  const [year, setYear] = React.useState('');
  const [make, setMake] = React.useState('');
  const [model, setModel] = React.useState('');

  const yearRef = useRef(null);
  const makeRef = useRef(null);
  const modelRef = useRef(null);

  function add() {
    if (year && make && model) {
      setCars([...cars, { year, make, model }]);
      setYear('');
      setMake('');
      setModel('');
    }
  }

  function handleYear(event) {
    setYear(event.target.value);
  }

  function handleMake(event) {
    setMake(event.target.value);
  }

  function handleModel(event) {
    setModel(event.target.value);
  }

  function handleKeyDown(event, nextRef) {
    if (event.key === 'Enter') {
      nextRef.current.focus();
    }
  }

  function enter(event) {
    if (event.key === 'Enter') {
      add();
    }
  }

  return (
    <>
      <div>
        <h3>list of cars</h3>
        <ul>
          {cars.map((car, index) => (
            <li key={index}>
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="number"
          value={year}
          onChange={handleYear}
          onKeyDown={(event) => handleKeyDown(event, makeRef)}
          ref={yearRef}
          placeholder="Year"
        />
        <input
          type="text"
          value={make}
          onChange={handleMake}
          onKeyDown={(event) => handleKeyDown(event, modelRef)}
          ref={makeRef}
          placeholder="Make"
        />
        <input
          type="text"
          value={model}
          onChange={handleModel}
          onKeyDown={enter}
          ref={modelRef}
          placeholder="Model"
        />
      </div>
      <div>
        <button onClick={add}>Add</button>
      </div>
    </>
  );
};

export default Cars;
