import { useState, useEffect } from 'react';
import image from '../assets/Waldo.jpg';
import Notification from './Notification';

function Photo(props) {
  const [found, setFound] = useState(null);

  const handleFound = () => {
    setFound(null)
  }

  useEffect(()=>{
    //loops through targets to see if one is a match
    for (let i = 0; i < 3; i += 1) {
      if(props.x >= (props.targets[i].targetLocation[0] - 50) && props.x  <= (props.targets[i].targetLocation[0] + 50) &&
         props.y >= (props.targets[i].targetLocation[1] - 50) && props.y <= (props.targets[i].targetLocation[1] + 50) &&
         props.choice === props.targets[i].targetName) {
           
          setFound(`You Found ${props.targets[i].targetName}`);
          props.correct();
          
          if (i === 0) {
            props.t1()
          }
          if (i === 1) {
            props.t2()
          }
          if (i === 2) {
            props.t3()
          }
        }
    }

  },[props.choice])


  return (
    <div>
      <img onClick={props.click} src={image} alt='waldo'/>
      <Notification found={found} update={handleFound} />
    </div>
  )
}

export default Photo;