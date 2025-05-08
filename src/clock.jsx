import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = React.useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  
    return () => clearInterval(interval);
  }, []); 

  function Time() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
  }

  function format(number) {
    return (number < 10 ? '0' : '') + number
  }

  const formattedTime = Time();

  return (
    <>
      <div className='clock'>
      <span>{formattedTime}</span>
      </div>
    </>
  );
};

export default Clock;
