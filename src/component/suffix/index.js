import React, {useState} from 'react'
import './index.scss'
const path = require('path') 

// let suffixItemCommonStyle = {
//   display: 'inline-block',
//   width: 80,
//   marginLeft: 10,
//   marginRight: 10,
//   textAlign: 'center',
//   height: 24,
//   borderRadius: 12,
//   lineHeight: '24px',
//   cursor: 'pointer',
//   backgroundColor: '#e9e8f1'
// }

// let suffixItemClickedStyle = {
//   display: 'inline-block',
//   width: 80,
//   marginLeft: 10,
//   marginRight: 10,
//   textAlign: 'center',
//   height: 24,
//   borderRadius: 12,
//   lineHeight: '24px',
//   cursor: 'pointer',
//   backgroundColor: '#503BE9'
// }


const getExtSet = (filesArr) => {
  const extSet = new Set()
  filesArr.forEach(f => {
    const ext = path.extname(f)
    extSet.add(ext)
  })
  return (Array.from(extSet))
}

function SuffixPinAll (props) {
  let suffixItemStyle = 'all' === props.cursor ? 'suffixItemClicked' : 'suffixItemCommon'
  return <li className={suffixItemStyle} onClick={e => props.selectExt(e, 'all')}>All</li>
}

function SuffixPin (props) {
  const [cursor, setCursor] = useState(0)

  const files = props.files
  
  let extArr = getExtSet(files)

  const selectExt = (e, ext) => {
    e.preventDefault()
    // setTagStyleChange(false)
    console.log(props.ext)
    console.log(ext)
    setCursor(ext)
    props.setExt(e.target.innerText)
  }
  
  return (
    <div>
      <h3>Select Suffix</h3>
      <ul>
        <SuffixPinAll cursor={cursor} selectExt={selectExt}/>
        {
          extArr.length !== 0 ?
          extArr.map(ext => {
            let suffixItemStyle = ext === cursor ? 'suffixItemClicked' : 'suffixItemCommon'
            return <li  key={ext} className={suffixItemStyle} onClick={e => selectExt(e, ext)}>{ext}</li>
          })
          : null
        }
      </ul>
    </div>
  )
}

export default SuffixPin