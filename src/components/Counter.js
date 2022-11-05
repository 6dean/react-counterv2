const Counter = ({ numbers, setNumbers, index, elem }) => {
  return (
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
  );
};

export default Counter;
