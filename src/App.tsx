import React from 'react';
import './App.sass';
import me from './me.jpeg';

function App() {
  return (
    <div className="App">
      <div className="flex-grid">
        <div className="left">
          <h1 className="title">Hell<a className="letterO">o <i className="fire"> { createFire() } </i></a>!</h1>
            <h2 className="subtitle">* <p className="codeword">Code</p> and some <p className="creativityword">Creativity</p>*</h2>
        </div>
        <div>
          <img className="meImage" src={me} alt="Hey there its me!"/>
        </div>
      </div>
    </div>
  );
}

function createFire() {
    return (
    <i>
      {Array.from({ length: 50 }, (_, __) => (
        <strong className="particle"></strong>
      ))}
    </i>
  );
}

export default App;
