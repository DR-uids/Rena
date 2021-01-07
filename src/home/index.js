import React, { useState } from 'react'
import AddFileButton from '../component/addFileBtn'
import SuffixPin from '../component/suffix'
import FileList from '../component/fileList'
import './index.scss'

const path = require('path')

const getExtFiles = (ext, originFiles) => {
  let newFiles
  // if now select suffix pin, change the list to the relative files. 
  // else remain the all files list.
  if(ext !== 'All') { 
    newFiles = originFiles.filter(f => {
      if (path.extname(f).toLowerCase() === '.' + ext) {
        return f
      }
    })
  } else {
    newFiles = originFiles
  }
  return newFiles
}

function Home () {
  const [files, setFiles] = useState([]) // files Array State
  const [ext, setExt] = useState('All') // the suffix be selected, default state is 'All'.
  let showFiles = getExtFiles(ext, files) // for change the files list view.
  // console.log(showFiles)
  return (
    <div className='homeContainer'>
        <div className='fileArea'>
          <AddFileButton setFiles={setFiles} setExt={setExt}/>
          {
            showFiles && showFiles.length !== 0 ?
            <FileList files={showFiles}/> : null
          }
        </div>
        <div className='editArea'>
          <div className='editAreaMain'>
            <SuffixPin files={files} setExt={setExt} ext={ext}/>
          </div>
        </div>
      </div>
  )
}

export default Home