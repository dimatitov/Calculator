import React from 'react';
import './App.css';

function App() {
  return (
    <main className="App">
      <section className="calc">
        <div className="calc__body">
          <div className="grid-container">

            <div className="grid-container__result-area result-area">
              <div className="result-area__priority">20×80×0,5</div>
              <div className="result-area__result">800</div>
            </div>

            <div className="grid-container__line"></div>

            <div className="grid-container__btn">
              <button className="btn">c</button>
              <button className="btn">√</button>
              <button className="btn">%</button>
              <button className="btn">/</button>
              <button className="btn">7</button>
              <button className="btn">8</button>
              <button className="btn">9</button>
              <button className="btn">*</button>
              <button className="btn">4</button>
              <button className="btn">5</button>
              <button className="btn">6</button>
              <button className="btn">-</button>
              <button className="btn">1</button>
              <button className="btn">2</button>
              <button className="btn">3</button>
              <button className="btn">+</button>
              <button className="btn">00</button>
              <button className="btn">0</button>
              <button className="btn">,</button>
              <button className="btn btn--repaint">=</button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
