import React, { useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = React.useState(0);
  const [ativo, setAtivo] = React.useState(false);

  useEffect(() => {
    let interval;

    if (ativo) {
      interval = setInterval(() => {
        setTime((t) => t + 1);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [ativo]);

  function start() {
    setAtivo(true);
  }

  function reset() {
    setAtivo(false);
    setTime(0);
  }

  function stop() {
    setAtivo(false);
  }

  function watch() {
    const milisec = time % 100;
    const totalSec = Math.floor(time / 100);
    const seconds = totalSec % 60;
    const minutes = Math.floor(totalSec / 60);

    return `${format(minutes)}:${format(seconds)}:${format(milisec)}`;
  }

  function format(number) {
    return (number < 10 ? '0' : '') + number;
  }

  const formattedTime = watch();

  return (
    <>
      <div className="clock">
        <span>{formattedTime}</span>
        <div className="clockbot">
          <button onClick={start} style={{ background: '#00ff00' }}>
            start
          </button>
          <button onClick={stop} style={{ background: '#ff0000' }}>
            stop
          </button>
          <button onClick={reset} style={{ background: '#ffff00' }}>
            reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
