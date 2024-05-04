import CounterButton from "./CounterButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
      </header>
      <div>
        <CounterButton increase={1} />
        <CounterButton increase={10} />
      </div>
    </div>
  );
}

export default App;
