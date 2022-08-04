import { useEffect, useLayoutEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Photo from './components/Photo';
import TargetingBox from './components/TargetingBox';
import Menu from './components/Menu';
import Database from './components/UseDatabase';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [choice, setChoice] = useState();
  const [targets, setTargets] = useState([
    {
      targetLocation: []
    },
    {
      targetLocation: []
    },
    {
      targetLocation: []
    }
  ]);
  const [t1Located, setT1located] = useState(false);
  const [t2Located, setT2located] = useState(false);
  const [t3Located, setT3located] = useState(false);

  const handleT1 = () => {
    setT1located(true)
  };

  const handleT2 = () => {
    setT2located(true)
  };

  const handleT3 = () => {
    setT3located(true)
  };
  
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
  
  const handleChoice = (e) => {
    setChoice(e.target.innerHTML);
  }

  // generate targets
  useEffect(() => {
    (async () => {
      const targetList = await Database();
      const newTargets = [];
      for (let i = 0; i < 3; i += 1) {
        let index = Math.floor(Math.random() * targetList.length);
        newTargets.push(targetList[index]);
        targetList.splice(index, 1);
      }
      setTargets(newTargets)
    })();
  }, []);
  
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
    <div>
      <Menu targets={targets} t1={t1Located} t2={t2Located} t3={t3Located}/>
      <div className='app'>
        <TargetingBox x={x} y={y} hidden={hidden} click={handleChoice}
        targets={targets}/>
      </div>
      <Photo x={x} y={y} click={handleClick} choice={choice} 
      targets={targets} t1={handleT1} t2={handleT2} t3={handleT3}/>

    </div>
  );
}



export default App;
