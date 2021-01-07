import React from 'react'

function Button (props) {
  return <div className='big-button' onClick={props.onClick}>{props.btnName}</div>
}

export default Button