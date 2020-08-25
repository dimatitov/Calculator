import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Display from './components/Display';
import { calculate, isOperator } from './utils'
import './App.css';


const App: React.FC = () => {
  const [logs, setLogs] = useState<string>("")
  const [calculatedValue, setCalculatedValue ] = useState<number>(0)
  

  const addRecordInLogs = (record: string) => {
    const recordIsOperator = isOperator(record)
    console.log("addRecordInLogs -> recordIsOperator", recordIsOperator)
    const lastRecordInLog = logs[logs.length - 1]
    console.log("addRecordInLogs -> lastRecordInLog", lastRecordInLog)
    const lastRecordInLogIsOperator = isOperator(lastRecordInLog)
    console.log("addRecordInLogs -> lastRecordInLogIsOperator", lastRecordInLogIsOperator)

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
    console.log("logs", logs)
    console.log("record", record)
    setLogs(logs + record)

  }

  const handleClickOnCalcButton = () => {
    setCalculatedValue(calculate(logs))
  }

  const handleClearClick = () => {
    setLogs('')
    setCalculatedValue(0)
  }


  useEffect(() => {
    const handleKeyUpClick = (event: any) => {

      switch (event.key) {
          case "Enter": 
            handleClickOnCalcButton()
            break;
          case "*": 
            addRecordInLogs("*")
            break;
          case "/":
            addRecordInLogs("/") 
            break;
          case "-": 
            addRecordInLogs("-")
            break;
          case "+":
            addRecordInLogs("+")
            break;
          case "Delete": 
            handleClearClick()
            break;
          case "Backspace": 
            handleClearClick()
            break;
          case "7":
            addRecordInLogs("7")
            break;
          case "8":
            addRecordInLogs("8")
            break;
          case "9":
            addRecordInLogs("9")
            break;
          case "4":
            addRecordInLogs("4")
            break;
          case "5":
            addRecordInLogs("5")
            break;
          case "6":
            addRecordInLogs("6")
            break;
          case "1":
            addRecordInLogs("1")
            break;
          case "2":
            addRecordInLogs("2")
            break;
          case "3":
            addRecordInLogs("3")
            break;
          case "0":
            addRecordInLogs("0")
            break;
          default:
            return; 
      } 
    }
    window.addEventListener("keyup", handleKeyUpClick);

    return () => window.removeEventListener("keyup", handleKeyUpClick)
  }, [logs])


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
