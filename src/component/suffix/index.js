import React from 'react'
const path = require('path') 

const getExtSet = (filesArr) => {
  const extSet = new Set()
  filesArr.forEach(f => {
    const ext = path.extname(f)
    extSet.add(ext)
  })
  return (Array.from(extSet))
}

function SuffixPin (props) {

  // console.log(props.files)

  const files = props.files
  
  let extArr = getExtSet(files)
  // console.log(extArr)
  
  const selectExt = (e) => {
    e.preventDefault()
    // console.log(e.target.innerText)
    props.setExt(e.target.innerText)
  }
  return (
    <div>
      <h3>Select Suffix</h3>
      <ul>
        <li onClick={e => selectExt(e)}>All</li>
        {
          extArr.length !== 0 ?
          extArr.map(ext => <li key={ext} onClick={e => selectExt(e)}>{ext}</li>)
          : null
        }
      </ul>
    </div>
  )
}

export default SuffixPin