import React from 'react'
import Database from '../../../db'
import Utils from '../../../utils'
import Button from '../../../public/button'

const { dialog } = require('electron').remote
const { fileTable } = Database
const { uuid } = Utils
const path = require('path')

function AddFileButton () {
  console.log('1',fileTable)
  const handleClick = (e) => {
    e.preventDefault()
    dialog.showOpenDialog({ 
      title: '请选择文件',
      properties: ['openFile', 'multiSelections'] 
    }).then(res => {
      const fp = res.filePaths
      if (fp) {
        fp.forEach( (p,i) => {
          // filter files such as .gitignore
          if ( path.basename(p) && path.basename(p)[0] !== '.' ) {
            const obj = {}
            obj.base = path.basename(p)
            obj.dir = path.dirname(p)
            obj.ext = path.extname(p)
            obj.index = i
            obj.batch = uuid
            fileTable.setItem(obj.ext, obj).then( v => 
              console.log(v)
            ).catch( err => {
              console.log(err)
          })
          }
        } )
      }
      
    })
  }

  return (
    <Button onClick={e => handleClick(e)} btnName="添加文件"/>
  )
}

export default AddFileButton