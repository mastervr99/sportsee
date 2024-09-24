import { Rectangle } from 'recharts'

function SessionCursor(props){
  const { points, width, height } = props
  const { x, y } = points[0]
  return (
    <Rectangle
      fill="rgba(0,0,0,0.1)"
      stroke="rgba(0,0,0,0.1)"
      x={x}
      y={0}
      width={width}
      height={height * 3}
    />
  )
}
export default SessionCursor