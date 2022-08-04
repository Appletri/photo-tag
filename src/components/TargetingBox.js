function TargetingBox(props) {

  return (
    <div className={props.hidden ? 'target-box hidden' : 'target-box'}
    style={{top: props.y + 'px',left: props.x + 'px'}}>
      <div className='display'>
        <h1>
          {`x: ${Math.round(props.x)}; y: ${Math.round(props.y)};`}
        </h1>
      </div>
      <div className="indicator" />
      <div className={props.x > 1115 ? 'choices-left' : 'choices'}>
        <div onClick={props.click} className="choice">{props.targets[0].targetName}</div>
        <div onClick={props.click} className="choice">{props.targets[1].targetName}</div>
        <div onClick={props.click} className="choice">{props.targets[2].targetName}</div>
      </div>
    </div>
  )
 }
 
 export default TargetingBox;