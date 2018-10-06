import React, { Component } from 'react'
import styled from 'react-emotion'
import Call from './Call'
import RoomMenu from './RoomMenu'

const Container = styled('div')`
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: auto auto;
  grid-template-areas: 
    "sidebar buttons"
    "sidebar callers";
`

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
      return <Call roomID={this.state.roomID} />
    } else {
      return <RoomMenu changeRoomID={this.changeRoomID} />
    }
  }
}

export default App
