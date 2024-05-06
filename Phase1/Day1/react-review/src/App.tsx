import CounterButton from "./CounterButton";
import Memo2 from "./Memo/Memo2";
import Memo3 from "./Memo/Memo3";
import Memo4 from "./Memo/Memo4";
import Memo from "./Memo/memoDemo";
import UseMemo1 from "./Memo/NumberList";
import UseMemo2 from "./Memo/UseMemo2";
import UseEffectUnMount from "./useEffect/useEffectUnMount";
import UseEffectUnMountDep from "./useEffect/useEffectUnMountDep";
import UseEffectUnMountDep2 from "./useEffect/useEffectUnMountDep2";
import CounterUseRef from "./UseRef/CounterUseRef";
import InnerTextChanger from "./UseRef/InnerTextChanger";
import UseRefDemo from "./UseRef/UseRefDemo";

import RouterApp from "./Route/Route";
import BookRoute from "./Route/BookRoute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Counter App</h1> */}
        <h1>Exam Prep</h1>
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
      {/* <Memo4 /> */}

      {/* <UseMemo1 /> */}
      {/* <UseMemo2 /> */}

      {/* <UseRefDemo /> */}
      {/* <CounterUseRef /> */}
      {/* <InnerTextChanger /> */}

      {/* ReactRouters */}
      {/* <RouterApp /> */}
      <BookRoute />
    </div>
  );
}

export default App;
