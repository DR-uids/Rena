import React, {useState} from 'react'
import './index.scss'
const path = require('path') 

const getExtSet = (filesArr) => { // Use Set() to keep ext unique.
  const extSet = new Set()
  filesArr.forEach(f => {
    const ext = f.split('.').pop().toLowerCase()
    extSet.add(ext)
  })
  return (Array.from(extSet))
}

const switchSuffixPinStyle = (tagRelateExt, nowSelectExt) => { // when click pin, change the btn style
  return tagRelateExt === nowSelectExt ? 'suffixItemClicked' : 'suffixItemCommon'
}

function SuffixPinAll (props) {
  return <li className={switchSuffixPinStyle('All', props.cursor)} onClick={e => props.selectExt(e, 'All')}>All</li>
}

function SuffixPin (props) {
  const [cursor, setCursor] = useState(0) // set now select suffix state, for change the btn style.

  const files = props.files
  
  let extArr = getExtSet(files)

  const selectExt = (e, ext) => {
    e.preventDefault()
    setCursor(ext)
    props.setExt(e.target.innerText)
  }
  
  return (
    <div className='suffix'>
      <h3>Select Suffix</h3>
      <ul>
        <SuffixPinAll cursor={cursor} selectExt={selectExt}/>
        {
          extArr.length !== 0 ?
          extArr.map(ext => {
            return <li  key={ext} className={switchSuffixPinStyle(ext, cursor)} onClick={e => selectExt(e, ext)}>{ext}</li>
          })
          : null
        }
      </ul>
    </div>
  )
}

export default SuffixPin