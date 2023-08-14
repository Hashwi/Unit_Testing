import "./App.css";
import Async from "./components/Async";
import Greeting from "./components/Greeting";

function App() {
  return (
    <>
      <div className="App">
        <h1> Learn React</h1>
        <Greeting />
        <Async/>
      </div>
    </>
  );
}

export default App;
