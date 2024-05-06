import CounterButton from "./CounterButton";
import Memo2 from "./Memo/Memo2";
import Memo3 from "./Memo/Memo3";
import Memo4 from "./Memo/Memo4";
import Memo from "./Memo/memoDemo";
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
      {/* <UseEffectUnMountDep2 /> */}
      {/* <Memo /> */}
      {/* <Memo2 /> */}
      {/* <Memo3 /> */}
      <Memo4 />
    </div>
  );
}

export default App;
