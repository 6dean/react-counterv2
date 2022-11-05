import { useState } from "react";
import "./App.css";
// import Counter from "./components/Counter";

function App() {
  const [numbers, setNumbers] = useState([0]);

  //
  return (
    <div className="counter-website">
      <div>
        <button
          className="new-counter"
          onClick={() => {
            const newNumbers = [...numbers];
            newNumbers.push(0);
            setNumbers(newNumbers);
          }}
        >
          new counter
        </button>
      </div>
      <div className="binding-counters">
        {numbers.map((elem, index) => {
          if (index < 3) {
            return (
              <div className="master">
                <div className="counters">
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

                    <div className="result">{elem}</div>
                    <button
                      onClick={() => {
                        const newNumbers = [...numbers];
                        newNumbers[index]++;
                        setNumbers(newNumbers);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="reset-button">
                    <div>
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
                  </div>
                </div>
              </div>
            );
          } else {
            alert`Max counter deployed`;
          }
        })}
      </div>
    </div>
  );
}

export default App;
