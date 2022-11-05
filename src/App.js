import { useState } from "react";
import "./App.css";
// import Counter from "./components/Counter";

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
            console.log(numbers, newNumbers);
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
                <div className="counters">
                  <div className="counter">
                    <button
                      className="sus-add-button"
                      onClick={() => {
                        const newNumbers = [...numbers];
                        newNumbers[index]--;
                        setNumbers(newNumbers);
                      }}
                    >
                      <div className="sizing"> -</div>
                    </button>

                    <div className="result">{elem}</div>
                    <button
                      className="sus-add-button"
                      onClick={() => {
                        const newNumbers = [...numbers];
                        newNumbers[index]++;
                        setNumbers(newNumbers);
                      }}
                    >
                      <div className="sizing"> +</div>
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
            <h1>0 / 3</h1>;
            alert`Max counter deployed`;
          }
        })}
      </div>
      <footer>Made by dean at Le Reacteur - November 2022</footer>
    </div>
  );
}

export default App;
