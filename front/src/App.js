import React, { Component } from 'react'
import RoomMenu from './RoomMenu'
import Sidebar from './Sidebar'
import Controls from './Controls'
import Video from './Video'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      room: null
    }
    this.changeRoom = this.changeRoom.bind(this)
  }

  changeRoom (room) {
    if (room) this.setState({room: room.room, token: room.token})
    else this.setState({room: null, token: null})
  }

  render () {
    // If state.room exists, then mount the Video, Controls, and Sidebar components and connect
    // Otherwise, show the RoomMenu component so that the user can select a room to connect to
    if (this.state.room) {
      return (
        <div>
          <Video sid={this.state.room.sid} token={this.state.token} />
          <Controls changeRoom={this.changeRoom} />
          <Sidebar />
        </div>
      )
    } else {
      return <RoomMenu changeRoom={this.changeRoom} />
    }
  }
}

export default App
