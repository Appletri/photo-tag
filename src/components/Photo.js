import image from '../assets/Waldo.jpg';
import Notification from './Notification';

function Photo(props) {

  return (
    <div>
      <img onClick={props.click} src={image} alt='waldo'/>
      <Notification found={props.found} update={props.handleFound} />
    </div>
  )
}

export default Photo;