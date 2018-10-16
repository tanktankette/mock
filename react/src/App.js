import React, { Component } from 'react'
import Call from './Call'
import RoomMenu from './RoomMenu'

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
    if (this.state.room) {
      return <Call room={this.state.room} token={this.state.token} changeRoom={this.changeRoom} />
    } else {
      return <RoomMenu changeRoom={this.changeRoom} />
    }
  }
}

export default App
