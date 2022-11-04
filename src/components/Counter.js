const Counter = ({ counter, setCounter }) => {
  return (
    <>
      <div className="counter">
        <button onClick={() => setCounter(counter - 1)}> - </button>
        <div>{counter}</div>
      </div>
      <button onClick={() => setCounter(counter + 1)}> + </button>
      <div className="reset-button">
        <button onClick={() => setCounter(0)} className="reset">
          RESET
        </button>
      </div>
    </>
  );
};

export default Counter;
