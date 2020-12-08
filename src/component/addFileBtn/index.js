import React, { Component, useState } from 'react'
import Button from '../../../public/button'

const { dialog } = require('electron').remote

function AddFileButton () {
  const handleClick = (e) => {
    e.preventDefault()
    dialog.showOpenDialog({ 
      title: '请选择文件',
      properties: ['openFile', 'multiSelections'] 
    }).then(res => {
      console.log(res.filePaths)
    })
  }

  return (
    <Button onClick={e => handleClick(e)} btnName="添加文件"/>
  )
}

export default AddFileButton