import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Controls from './Controls'
import Video from './Video'

export default class Call extends Component {
  render () {
    return (
      <div>
        <Video sid={this.props.room.sid} token={this.props.token} />
        <Controls changeRoom={this.props.changeRoom} />
        <Sidebar />
      </div>
    )
  }
}
