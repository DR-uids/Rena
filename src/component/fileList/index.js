import React from 'react'
import './index.scss'

const path = require('path')


function FileList (props) {
  
  const files = props.files
  return (
    <div className='fileListContainer'>
      <p>{path.dirname(files[0])}</p>
      <ul className='fileListBox'>
      {
        files.map(f => {
          // f = path.basename(f)
          // const pathSplitArr = f.split(".")
          // const ext = pathSplitArr.pop()
          // let pathPrefix = pathSplitArr.join('')
          // console.log(pathPrefix)
          // console.log(pathPrefix.slice(0,12)+'...')
          return <li className='fileItem'  key={f}>{path.basename(f)}</li>
        }     
        )
      } 
      </ul>
    </div>
  )
}

export default FileList