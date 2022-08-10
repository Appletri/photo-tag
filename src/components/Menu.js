import { useState } from "react"
import Timer from "./Timer";

function Menu(props) {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    if (show === false) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  

  return(
    <div className="menu">
      <div onClick={handleClick} className="menu-icon">{show ? 'x' : '+'}</div>
      <div className={show ? 'menu-display' : 'menu-display hidden'}>
        <Timer isGameOver={props.isGameOver}/>
        <div className="menu-choices">
          <div className={props.t1 ? 'found' : ''}>{props.targets[0].targetName}</div>
          <div className={props.t2 ? 'found' : ''}>{props.targets[1].targetName}</div>
          <div className={props.t3 ? 'found' : ''}>{props.targets[2].targetName}</div>
        </div>
      </div>
    </div>
  )
}

export default Menu