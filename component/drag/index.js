import React, { Component, useState } from 'react'
import './index.scss'


const { dialog } = require('electron').remote

function Drag () {
  // const [data, setData] = useState([])
  // const getPath = (e, path) =>{
  //   console.log(path)
  //   if(path == null){
  //       alert('请选择一个文件/文件夹')
  //   }
  // }
  const handleClick = (e) => {
    e.preventDefault()
    dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] })
    // console.log(dialog)
  }

  return (
    <div className='dragContainer' onClick={ e => handleClick(e) }>
      <p>Dorop file here or browse</p>
    </div>
  )
}

export default Drag