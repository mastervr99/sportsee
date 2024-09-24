function ActivityTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p>{payload[0].value + 'kg'}</p>
          <p>{payload[1].value + 'Kcal'}</p>
        </div>
      )
    }
    return null
  }
  
  export default ActivityTooltip