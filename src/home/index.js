import React, {useState } from 'react'
import AddFileButton from '../component/addFileBtn'
import FileList from '../component/fileList'
import './index.scss'

function Home () {
  const [files, setFiles] = useState([])
  return (
    <div className='homeContainer'>
        <div className='fileArea'>
          <div>
            <AddFileButton setFiles={setFiles} />
          </div>
          {
            files && files.length !== 0 ?
            <FileList files={files}/> : null
          }
        </div>
        <div className='editArea'>

        </div>
      </div>
  )
}

export default Home