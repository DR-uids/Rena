import React, { Component } from 'react'
import AddFileButton from '../component/addFileBtn'
import './index.scss'


class Home extends Component {
  render () {
    return (
      <div className='homeContainer'>
        <div className='fileArea'>
          <AddFileButton />
        </div>
        <div className='editArea'>

        </div>
      </div>
    )
  }
}

export default Home