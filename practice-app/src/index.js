import React from 'react';
import ReactDOM from 'react-dom';

const App = function() {
  const buttonText = ' Click Me!';
  const labelText = 'Enter name: ';
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
        <input id="name" type="text" />
      </label>
      <button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
