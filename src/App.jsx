import React from 'react';
import './App.css';

import Button from './components/Button';
import Result from './components/Result';

function App() {
  return (
    <main className="App">
      <section className="calc">
        <div className="calc__body">
          <div className="grid-container">
            <Result />

            <div className="grid-container__line"></div>

            <div className="grid-container__btn">
              <Button>c</Button>
              <Button>√</Button>
              <Button>%</Button>
              <Button>/</Button>

              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button>*</Button>
              
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>-</Button>
              
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>+</Button>
              
              <Button>00</Button>
              <Button>0</Button>
              <Button>,</Button>
              <Button repaint={"repaint"}>=</Button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
