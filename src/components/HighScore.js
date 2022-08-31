import { useEffect, useState } from "react";
import { Database, updateHS } from './UseDatabase';

function HighScore(props) {
  const [highscores, setHighscores] = useState([]);
  const [newHS, setNewHS] = useState(false)
  
  // pulls Highscores
  useEffect(() => {
    (async () => {
      const list = await Database('highscores');
      sortList(list);
      setHighscores(list);
      setNewHS(false)
    })();

  }, [ newHS ] );
  
  // update Highscore
  useEffect(() => {
    
    if (props.isGameOver && props.yourTime) {
      if(highscores.length <= 10 || props.yourTime > highscores[10].time) {
        updateHS(props.yourTime);
        setNewHS(true);
      }
    }
    
  }, [props.isGameOver, props.yourTime])
  
  function sortList(list) {
    list.sort((a, b) => {
      return a.time - b.time
    })
  }

  function formatTime(time) {
    const getSeconds = `0${Math.round(time % 60)}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
  
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div className="highscores">
      <h1>Leaderboard</h1>
      {highscores.map((score, index) => {
        return(
          <div key={index} className="score">
            <p>{index + 1 + '.'}</p>
            <p>{score.name}</p>
            <p>{formatTime(score.time)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default HighScore;