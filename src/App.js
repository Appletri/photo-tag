import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Photo from './components/Photo';
import TargetingBox from './components/TargetingBox';
import Menu from './components/Menu';
import { Database } from './components/UseDatabase';
import StartScreen from './components/StartScreen';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [targets, setTargets] = useState([
    {targetLocation: []},
    {targetLocation: []},
    {targetLocation: []}
  ]);
  const [t1Located, setT1located] = useState(false);
  const [t2Located, setT2located] = useState(false);
  const [t3Located, setT3located] = useState(false);
  const [isGameOver, setIsGameOver] = useState(true);
  const [yourTime, setYourTime] = useState(0);
  const [found, setFound] = useState(null);


  const handleStart = () => {
    setIsGameOver(false);
    setT1located(false);
    setT2located(false);
    setT3located(false);
    //generate targets
    (async () => {
      const targetList = await Database('targets');
      const newTargets = [];
      for (let i = 0; i < 3; i += 1) {
        let index = Math.floor(Math.random() * targetList.length);
        newTargets.push(targetList[index]);
        targetList.splice(index, 1);
      }
      setTargets(newTargets)
    })();
  }

  const handleYourTime = (time) => {
    setYourTime(time)
  }
  
  const handleScroll = () => {
    setOffsetY(window.pageYOffset) 
    setOffsetX(window.pageXOffset)
  };
  
  const handleClick = (e) => {
    if (hidden) {
      setTimeout(() => {
        setHidden(false);
      }, 100)
    } else {
      setHidden(true);
    }
  }
  
  const handleFound = () => {
    setFound(null)
  }

  const handleChoice = (e) => {

     //loops through targets to see if one is a match
     for (let i = 0; i < 3; i += 1) {
      if(x >= (targets[i].targetLocation[0] - 50) && x <= (targets[i].targetLocation[0] + 50) &&
          y >= (targets[i].targetLocation[1] - 50) && y <= (targets[i].targetLocation[1] + 50) &&
          e.target.innerHTML === targets[i].targetName) {
            
          setFound(`You Found ${targets[i].targetName}`);
          setHidden(true)
          
          if (i === 0) {
            setT1located(true)
          }
          if (i === 1) {
            setT2located(true)
          }
          if (i === 2) {
            setT3located(true)
          }
        }
    }
  }

  //handles gameover
  useEffect(() => {
    if (t1Located && t2Located && t3Located) {
      setIsGameOver(true);
    }
  }, [t1Located, t2Located, t3Located]);
  
  //handle targetingbox location
  useEffect(() => {
    
    const update = (e) => {
      if(hidden) {
        setX(offsetX + e.x)
        setY(offsetY + e.y)
      }
    }

    window.addEventListener('click', update);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('click', update);
      window.removeEventListener('scroll', handleScroll);
    }
  }, [x, y, hidden, offsetY])

  return (
    <div className='app'>
      <StartScreen start={handleStart} isGameOver={isGameOver} yourTime={yourTime} />
      <Menu targets={targets} t1={t1Located} t2={t2Located} t3={t3Located}isGameOver={isGameOver} yourTime={yourTime} setYourTime={handleYourTime}/>
      <div>
        <TargetingBox x={x} y={y} hidden={hidden} click={handleChoice}
        targets={targets}/>
      </div>
      <Photo click={handleClick} found={found} handleFound={handleFound}/>

    </div>
  );
}



export default App;
