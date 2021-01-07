import React, { useState } from 'react'
import fileTypes from '../../../public/fileType'
import Button from '../../../public/button'

const { dialog } = require('electron').remote

function AddFileButton (props) {
  const [btnName, setBtnName] = useState('Add Files')
  const handleClick = (e) => {
    e.preventDefault()
    // open dialog
    setBtnName('Add Again') // if Added files, change the btn.
    dialog.showOpenDialog({
      title: 'Please Select Files',
      filters: fileTypes,
      properties: ['openFile', 'multiSelections','dontAddToRecent'] 
    }).then(res => {
      const filePaths = res.filePaths // get file path.
      const canceled =  res.canceled
      if (!canceled) {
        props.setFiles(filePaths) // add files list to state.
        props.setExt('All') // if select new files , reset the suffix to All.
      } else {
        console.log("Not select files.")
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