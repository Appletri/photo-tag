import { useEffect, useState } from "react";
import { Database, updateHS } from './UseDatabase';

function HighScore(props) {
  const [highscores, setHighscores] = useState([]);
  const [newHS, setNewHS] = useState(false)
  
  // pulls Highscores
  useEffect(() => {
    (async () => {
      const list = await Database('highscores');
      setHighscores(list)
    })();
  }, []);

  // update Highscore
  useEffect(() => {
    const time = document.querySelector('.timer stop')

    if (props.isGameOver && time !== null) {
      console.log('working');
      updateHS(time)
    }

  }, [props.isGameOver])

  return (
    <div className="highscores">
      <h1>High Scores</h1>
      {highscores.map((score, index) => {
        return(
          <div key={index} className="score">
            <p>{index + 1 + '.'}</p>
            <p>{score.name}</p>
            <p>{score.time}</p>
          </div>
        )
      })}
    </div>
  )
}

export default HighScore;