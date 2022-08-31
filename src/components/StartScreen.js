import HighScore from "./HighScore"

function StartScreen(props) {
  return (
    <div className={props.isGameOver ? 'start-page' :'start-page-hidden'}>
      <HighScore isGameOver={props.isGameOver} yourTime={props.yourTime}/>
      <button className="start-butt" onClick={props.start}> Start Game 
      </button>
    </div>
  )
}

export default StartScreen