import { useEffect, useState } from 'react';

function Timer({ isGameOver }) {
  const [timer, setTimer] = useState(0);
  const [yourTime, setYourTime] = useState(0);

  useEffect(() => {
      let interval;
      if (!isGameOver) {
        // start interval/timer
        interval = setInterval(() => {
          setTimer((timer) => timer + 1);
        }, 1000);
      } else if (isGameOver) {
        // stops/resets timer
        clearInterval(interval);
        setYourTime(timer);
        setTimer(0);
      }
      
      // when component unmounts stops timer / clearInterval
      return () => {
        clearInterval(interval);
      };

    }, [isGameOver] );

  return <div className={!isGameOver ? 'timer' : 'timer stop'}>
    {timer === 0 ? formatTime(yourTime) : formatTime(timer)}</div>;
}

function formatTime(time) {
  const getSeconds = `0${Math.round(time % 60)}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${getHours}:${getMinutes}:${getSeconds}`;
};

export default Timer;