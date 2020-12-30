import React, { useEffect, useState } from 'react'
import './index.scss'

const path = require('path')

function FileList (props) {
  
  const files = props.files
  return (
    <div>
      <h3>{path.dirname(files[0])}</h3>
      <ul className='fileListBox'>
      {
        files.map(f => 
          <li className='fileItem'  key={f}>{path.basename(f)}</li>     
        )
      } 
      </ul>
    </div>
  )
}

export default FileList