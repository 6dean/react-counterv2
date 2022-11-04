import { useState } from "react";
import "./App.css";
// import Counter from "./components/Counter";

function App() {
  const [numbers, setNumbers] = useState([0]);

  //
  return (
    <div>
      <button
        onClick={() => {
          const newNumbers = [...numbers];
          newNumbers.push(0);
          setNumbers(newNumbers);
        }}
      >
        Add
      </button>
      {numbers.map((elem, index) => {
        console.log(elem);
        return (
          <>
            <div className="counter">
              <button
                onClick={() => {
                  const newNumbers = [...numbers];
                  newNumbers[index]--;
                  setNumbers(newNumbers);
                }}
              >
                -
              </button>
              <div>{elem}</div>
            </div>
            <button
              onClick={() => {
                const newNumbers = [...numbers];
                newNumbers[index]++;
                setNumbers(newNumbers);
              }}
            >
              +
            </button>
            <div className="reset-button">
              <button
                onClick={() => {
                  const newNumbers = [...numbers];
                  newNumbers[index] = 0;
                  setNumbers(newNumbers);
                }}
                className="reset"
              >
                RESET
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
