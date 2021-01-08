import React, { useState } from 'react'
import Button from '../../../public/button'
import Input from '../../../public/input'
import './index.scss'

function RenameRules (props) {
  const [nameValue, setNameValue] = useState('[0-999]')
  // const [numberValue, setNumberValue] = useState(0)
  const handleClickBtn = () => {
    // e.preventDefault()
    if(nameValue) {
      const reg = /\[.*?\]/g
      const res = reg.exec(nameValue)
      console.log(res)
      props.files.map(f => {
        console.log(f)
      })
    }
    
  }
  return (
    <div className='rules'>
      <h3>Rename Rules</h3>
      <div className='form'>
        <Input inputName={'Files Name: '} setInputValue={setNameValue} inputValue={nameValue} placeholder={'Please input your files name rules.'}/>
        <Button btnName={'Rename'} onClick={handleClickBtn}/>
      </div>
    </div>
  )
}

export default RenameRules