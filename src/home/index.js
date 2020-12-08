import React, { Component } from 'react'
import Drag from '../../component/drag'
import './index.scss'


class Home extends Component {
  render () {
    return (
      <div className='homeContainer'>
        <Drag />
      </div>
    )
  }
}

export default Home