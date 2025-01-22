import { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let counter;

    if (isRunning) {
      counter = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(counter);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <>
      <h1 class="iceland-regular">Timer: {seconds}</h1>
      <button onClick={handleStart} aria-label="Start">
        ▶️
      </button>
      <button onClick={handlePause} aria-label="Pause">
        ⏸️
      </button>
      <button onClick={handleReset} aria-label="Reset">
        🔄
      </button>
    </>
  );
}

export default Timer;