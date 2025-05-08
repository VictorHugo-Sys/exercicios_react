import React from 'react';
import State from './state.jsx';
import Change from './change.jsx';
import Color from './color.jsx';
import Foods from './foods.jsx';
import Cars from './cars.jsx';
import Todo from './todo.jsx';
import Clock from './clock.jsx';
import Stopwatch from './stopwatch.jsx';


const App = () => {

  return (
    <div className='body'>
      <div className="box">
        <State />
      </div>
      <div className="box">
        <Change />
      </div>
      <div className="box">
        <Color />
      </div>
      <div className='box'>
        <Foods/>
      </div>
      <div className='box'>
        <Cars/>
      </div>
      <div className="box">
        <Todo/>
      </div>
      <div className='box'>
        <Clock/>
      </div>
      <div className="box">
         <Stopwatch/>
      </div>
    </div>
  );
};

export default App;
