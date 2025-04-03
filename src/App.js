import './App.css';
import Button from './components/Button';

function App() {
  const handleButtonClick = (label) => {
    console.log(`Button clicked: ${label}`);
    // Add logic to handle button clicks here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Scientific Calculator</h1>
        <div className="calculator">
          <Button label="1" onClick={() => handleButtonClick("1")} type="digit" />
          <Button label="2" onClick={() => handleButtonClick("2")} type="digit" />
          <Button label="3" onClick={() => handleButtonClick("3")} type="digit" />
          <Button label="4" onClick={() => handleButtonClick("4")} type="digit" />
          <Button label="5" onClick={() => handleButtonClick("5")} type="digit" />
          <Button label="6" onClick={() => handleButtonClick("6")} type="digit" />
          <Button label="7" onClick={() => handleButtonClick("7")} type="digit" />
          <Button label="8" onClick={() => handleButtonClick("8")} type="digit" />
          <Button label="9" onClick={() => handleButtonClick("9")} type="digit" />
          <Button label="+" onClick={() => handleButtonClick("+")} type="function" />
          <Button label="-" onClick={() => handleButtonClick("-")} type="function" />
          <Button label="×" onClick={() => handleButtonClick("×")} type="function" />
          <Button label="÷" onClick={() => handleButtonClick("÷")} type="function" />
          <Button label="." onClick={() => handleButtonClick(".")} type="decimal" />
        </div>
      </header>
    </div>
  );
}

export default App;