import React from 'react';

const Color = () => {
  const [color, setColor] = React.useState('#000000');

  function handleColor({ target }) {
    setColor(target.value);
  }

  return (
    <>
      <div>
        <div className="backColor" style={{ background: color }}>
          <p>{color}</p>
        </div>
        <input type="color" onChange={handleColor} />
      </div>
    </>
  );
};

export default Color;
