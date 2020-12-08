import React from 'react'

function Button (props) {
  return <div className='small-button' onClick={props.onClick}>{props.btnName}</div>
}

export default Button