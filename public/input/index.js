import React, { useState } from 'react'
import './index.scss'

function Input (props) {
  const handleChange = (e) => {
    // console.log(e.target.value)
    props.setInputValue(e.target.value)
  }
  return (
    <div className='inputComp'>
      <span>{props.inputName}</span>
      <input type="text" value={props.inputValue} placeholder={props.placeholder} onChange={e => handleChange(e)}/>
    </div>
  )
}

export default Input