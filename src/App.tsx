import "./App.css";
import Home from "./Components/Home";
import TaskContextProvider from "./Components/Utility/TaskContext";

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </div>
  );
}

export default App;
