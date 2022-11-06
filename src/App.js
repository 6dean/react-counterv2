import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const minNumbers = [0];
  const midNumbers = [0, 0];
  const maxNumbers = [0, 0, 0];
  const [numbers, setNumbers] = useState([]);
  //
  return (
    <div className="counter-website">
      <header>React counter V2</header>
      <p>Counter available</p>
      <div>
        <button
          className={
            numbers.length === maxNumbers.length ? "h1" : "new-counter"
          }
          onClick={() => {
            const newNumbers = [...numbers];
            newNumbers.push(0);
            setNumbers(newNumbers);
          }}
        >
          <div>
            {numbers.length === 0 && <h1>3 / 3</h1>}
            {numbers.length === minNumbers.length && <h1>2 / 3</h1>}
            {numbers.length === midNumbers.length && <h1>1 / 3</h1>}
            {numbers.length === maxNumbers.length && <h1>0 / 3</h1>}
          </div>
        </button>
      </div>

      <div className="binding">
        {numbers.map((elem, index) => {
          if (index < 3) {
            return (
              <div className="master">
                <Counter
                  numbers={numbers}
                  setNumbers={setNumbers}
                  index={index}
                  elem={elem}
                />
              </div>
            );
          } else if (index > 3) {
            return alert`Max counters reached`;
          }
        })}
      </div>
      <footer>Made by dean at Le Reacteur - November 2022</footer>
    </div>
  );
}

export default App;
