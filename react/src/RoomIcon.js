import React, { Component } from 'react'
import ConnectButton from './ConnectButton'
import DeleteButton from './DeleteButton'
import styled from 'react-emotion'

let jdenticon = require('jdenticon')

const fade = styled('div')`
  border-radius: 10px;
  content:"";
  position:absolute;
  width:100%;
  height:100%;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(30,30,30,1));
`

export default class RoomIcon extends Component {
  render () {
    let png = jdenticon.toPng(this.props.room.sid, 150)

    const Container = styled('div')`
      position: absolute;
      background-image: {png};
      background-size: contain;
      border-radius: 10px;
      height: 150px;
      width: 150px;
    `
    let title = this.props.room.id + ' - ' + this.props.rooms.name
    return (
      <Container>
        <div>{title}</div>
        <DeleteButton id={this.props.room.id} query={this.props.query} />
        <ConnectButton id={this.props.room.id} name={this.state.name} changeRoom={this.props.changeRoom} />
      </Container>
    )
  }
}
