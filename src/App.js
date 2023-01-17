import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import GetData from "./API/GetData";

function App() {
  return (
    <div className="App">
      <GetData />
    </div>
  );
}

export default App;
