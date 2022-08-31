import { useEffect, useState } from 'react';

function Timer(props) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
      let interval;
      if (!props.isGameOver) {
        // start interval/timer
        interval = setInterval(() => {
          setTimer((timer) => timer + 1);
        }, 1000);
      } else if (props.isGameOver) {
        // stops/resets timer
        clearInterval(interval);
        props.setYourTime(timer);
        setTimer(0);
      }
      
      // when component unmounts stops timer / clearInterval
      return () => {
        clearInterval(interval);
      };

    }, [props.isGameOver] );

  return <div className={!props.isGameOver ? 'timer' : 'timer stop'}>
    {timer === 0 ? formatTime(props.yourTime) : formatTime(timer)}</div>;
}

function formatTime(time) {
  const getSeconds = `0${Math.round(time % 60)}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${getHours}:${getMinutes}:${getSeconds}`;
};

export default Timer;