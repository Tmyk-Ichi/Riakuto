import React from "react";
import "./App.css";
import Greets from "./components/Greets";

const App: React.FunctionComponent = () => {
  const n = Math.floor(Math.random() * 10);
  const threshold = 5;
  const list = ["Patty", "Rolley", "Bobby"];
  return (
    <div className="App">
      <p>n is {n}</p>
      {n > threshold && <p>n is larger than {threshold}</p>}
      <p>n is {n % 2 === 0 ? "even" : "odd"}</p>
      <ul>
        {list.map((name) => (
          <li>Hello,{name}</li>
        ))}
      </ul>
      <form>
        <textarea value="Fixed Text" />
        <select value="uranus">
          <option value="saturn">Saturn</option>
          <option value="uranus">Uranus</option> {/* selected */}
          <option value="neptune">Neptune</option>
          <option value="pluto">Pluto</option>
        </select>
      </form>
      <Greets name="Patty" times={4}>
        <span role="img" aria-label="rabbit">
          🐰
        </span>
      </Greets>
    </div>
  );
};

export default App;
