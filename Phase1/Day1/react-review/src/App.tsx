import CounterButton from "./CounterButton";
import UseEffectUnMount from "./useEffect/useEffectUnMount";
import UseEffectUnMountDep from "./useEffect/useEffectUnMountDep";
import UseEffectUnMountDep2 from "./useEffect/useEffectUnMountDep2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
      </header>
      {/* <div>
        <CounterButton increase={1} />
        <CounterButton increase={10} />
      </div> */}

      {/* <UseEffectUnMount /> */}
      {/* <UseEffectUnMountDep /> */}
      <UseEffectUnMountDep2 />
    </div>
  );
}

export default App;
