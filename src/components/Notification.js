import { useEffect } from "react";

function Notification(props) {
  
  useEffect(() => {
    if (props.found) {
      setTimeout(() => {
        props.update()
      }, 5000)
    }
  },[props.found])

  return (
    <div className={props.found ? 'notification' : 'notification-hidden'}>{props.found}</div>
  )
}

export default Notification;