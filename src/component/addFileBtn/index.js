import React, { useState } from 'react'
// import Database from '../../../db'
import fileTypes from '../../../public/fileType'
import Button from '../../../public/button'

const { dialog } = require('electron').remote
// const { fileTable } = Database


function AddFileButton (props) {
  const [btnName, setBtnName] = useState('添加文件')
  const handleClick = (e) => {
    e.preventDefault()
    // open dialog
    setBtnName('重新添加')
    dialog.showOpenDialog({
      title: '请选择文件',
      filters: fileTypes,
      properties: ['openFile', 'multiSelections','dontAddToRecent'] 
    }).then(res => {
      const filePaths = res.filePaths // get file path
      const canceled =  res.canceled
      if (!canceled) {
        console.log(filePaths)
        props.setFiles(filePaths)
      } else {
        console.log("未选择文件")
      }
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <Button onClick={e => handleClick(e)} btnName={btnName}/>
  )
}

export default AddFileButton