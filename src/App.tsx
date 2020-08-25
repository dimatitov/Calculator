import React, { useState, useEffect, KeyboardEvent } from 'react';
import Button from './components/Button';
import Display from './components/Display';
import { calculate, isOperator } from './utils'
import './App.css';


// type KeyType = "/" | "7" | "8" | "9" | "*" | "4" | "5" | "6" | "-" | "1" | "2" | "3" | "+" | "0"

const App: React.FC = () => {
  const [logs, setLogs] = useState<string>("")
  const [calculatedValue, setCalculatedValue ] = useState<number>(0)
  

  const addRecordInLogs = (record: string) => {
    const recordIsOperator = isOperator(record)
    const lastRecordInLog = logs[logs.length - 1]
    const lastRecordInLogIsOperator = isOperator(lastRecordInLog)

    if (logs === "" && recordIsOperator) {
      return
    }

    if ((logs === "" || logs === "0") && record.includes("0")) {
      return
    }

    if (lastRecordInLogIsOperator && recordIsOperator) {
      setLogs(logs.slice(0, -1) + record)
      return
    }

    setLogs(logs + record)

  }

  const handleClickOnCalcButton = () => {
    setCalculatedValue(calculate(logs))
  }

  const handleClearClick = () => {
    setLogs('')
    setCalculatedValue(0)
  }

  // const clicButton = (event: any) => {
  //   if(event.keyCode === "Enter") {
  //   }
  // }


  
  useEffect(() => {
    window.addEventListener('keyup', (e: any): void => {
      if(e.keyCode === 13) {
        handleClickOnCalcButton()
      }else if(e.keyCode === 46 || e.keyCode === 8) {
        handleClearClick()
        return
      }else if(e.keyCode === 96 || e.keyCode === 48) {
        return addRecordInLogs("0")
      }else if(e.keyCode === 97 || e.keyCode === 49) {
        return addRecordInLogs("1")
      }else if(e.keyCode === 98 || e.keyCode === 50) {
        return addRecordInLogs("2")
      }else if(e.keyCode === 99 || e.keyCode === 51) {
        return addRecordInLogs("3")
      }else if(e.keyCode === 100 || e.keyCode === 52) {
        return addRecordInLogs("4")
      }else if(e.keyCode === 101 || e.keyCode === 53) {
        return addRecordInLogs("5")
      }else if(e.keyCode === 102 || e.keyCode === 54) {
        return addRecordInLogs("6")
      }else if(e.keyCode === 103 || e.keyCode === 55) {
        return addRecordInLogs("7")
      }else if(e.keyCode === 104 || e.keyCode === 56) {
        return addRecordInLogs("8")
      }else if(e.keyCode === 105 || e.keyCode === 57) {
        return addRecordInLogs("9")
      }else if(e.keyCode === 111) {
        return addRecordInLogs("/")
      }else if(e.keyCode === 106) {
        return addRecordInLogs("*")
      }else if(e.keyCode === 109) {
        return addRecordInLogs("-")
      }else if(e.keyCode === 107) {
        return addRecordInLogs("+")
      }

      
    })
  })


  return (
    <main className="App">
      <section className="calc">
        <div className="calc__body">
          <div className="grid-container">
            <Display logs={logs} calculatedValue={calculatedValue} />

            <div className="grid-container__line"></div>

            <div className="grid-container__btn">
              <Button title="c" onClick={() => handleClearClick()}/>
              <Button title="√" onClick={() => addRecordInLogs("√")}/>
              <Button title="%" onClick={() => addRecordInLogs("%")}/>
              <Button title="/" onClick={() => addRecordInLogs("/")}/>

              <Button title="7" onClick={() => addRecordInLogs("7")}/>
              <Button title="8" onClick={() => addRecordInLogs("8")}/>
              <Button title="9" onClick={() => addRecordInLogs("9")}/>
              <Button title="*" onClick={() => addRecordInLogs("*")}/>

              <Button title="4" onClick={() => addRecordInLogs("4")}/>
              <Button title="5" onClick={() => addRecordInLogs("5")}/>
              <Button title="6" onClick={() => addRecordInLogs('6')}/>
              <Button title="-" onClick={() => addRecordInLogs("-")}/>

              <Button title="1" onClick={() => addRecordInLogs("1")}/>
              <Button title="2" onClick={() => addRecordInLogs("2")}/>
              <Button title="3" onClick={() => addRecordInLogs("3")}/>
              <Button title="+" onClick={() => addRecordInLogs("+")}/>

              <Button title="00" onClick={() => addRecordInLogs("00")}/>
              <Button title="0" onClick={() => addRecordInLogs("0")}/>
              <Button title="," onClick={() => addRecordInLogs(",")}/>
              <Button white title="=" onClick={handleClickOnCalcButton}/>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
