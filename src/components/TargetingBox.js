import useWindowDimensions from "./UseWindowDimensions";

function TargetingBox(props) {
  const { width, height } = useWindowDimensions();
  return (
    <div className={props.hidden ? 'target-box hidden' : 'target-box'}
    style={{top: props.y + 'px',left: props.x + 'px'}}>
      {/* <div className='display'>
        <h1>
          {`x: ${Math.round(props.x)}; y: ${Math.round(props.y)};`}
        </h1>
      </div> */}
      <div className="indicator" />
      <div className={props.x > (width - 200)? 'choices-left':'choices'}>
        {props.targets.map((target, index)=> {
          return <div key={index} onClick={props.click} className="choice">{target.targetName}</div>
        })}
      </div>
    </div>
  )
 }
 
 export default TargetingBox;