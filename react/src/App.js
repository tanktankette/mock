import React, { Component } from 'react'
import Call from './Call'
import RoomMenu from './RoomMenu'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      roomID: null
    }
    this.changeRoomID = this.changeRoomID.bind(this)
  }

  changeRoomID (e) {
    this.setState({roomID: e.target.value})
  }

  render () {
    if (this.state.roomID) {
      return <Call roomID={this.state.roomID} changeRoomID={this.changeRoomID} />
    } else {
      return <RoomMenu changeRoomID={this.changeRoomID} />
    }
  }
}

export default App
