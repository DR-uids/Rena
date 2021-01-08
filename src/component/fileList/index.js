import React from 'react'
import './index.scss'

const path = require('path')


function FileList (props) {
  
  const files = props.files
  const dir = path.dirname(files[0])
  return (
    <div className='fileListContainer'>
      <p className='dir'>{dir}<span>{dir}</span></p>
      <p className='filesNumber'>{`Files Number: ${files.length}`}</p>
      <ul className='fileListBox'>
      {
        files.map(f => {
          return <li className='fileItem'  key={f}>{path.basename(f)}</li>
        }     
        )
      } 
      </ul>
    </div>
  )
}

export default FileList