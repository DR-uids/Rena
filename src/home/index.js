import React, { Component } from 'react'
import AddFileButton from '../component/addFileBtn'
import Database from '../../db'
import './index.scss'

const { fileTable } = Database

class Home extends Component {
  constructor(props) {
    super(props)
  }
  dab () {
    fileTable.keys().then(function(keys) {
      // 包含所有 key 名的数组
      console.log(keys);
    }).catch(function(err) {
        // 当出错时，此处代码运行
        console.log(err);
    });
  }
  render () {
    this.dab()
    return (
      <div className='homeContainer'>
        <div className='fileArea'>
          <div>
            <AddFileButton />
          </div>
          <ul>
            
          </ul>
        </div>
        <div className='editArea'>

        </div>
      </div>
    )
  }
}

export default Home