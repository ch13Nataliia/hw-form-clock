import React from 'react'

function Surround({ children, color }) {
  return (
    <div style={{border: `3px solid ${color}`}}>{ children }</div>
  )
}

export default Surround