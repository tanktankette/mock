/*
  RoomIcon:
    This component is used in RoomMenu to represent the different room available to connect to.
    It currently generates a identicon with the rooms sid to help differentiate the rooms.
    Eventually the icons would be set by whomever create the room.
*/
import React, { Component } from 'react'
import ConnectButton from './ConnectButton'
import DeleteButton from './DeleteButton'
import styled from 'react-emotion'
import { css } from 'emotion'

const style = css`
  position: relative;
  top: 111px;
  left: 7px;
`

let jdenticon = require('jdenticon')

const Fade = styled('div')`
  border-radius: 10px;
  content:"";
  position:absolute;
  width:150px;
  height:150px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,1));
`

const Container = styled('div')`
  border-radius: 10px;
  height: 150px;
  width: 150px;
`

const SvgContainer = styled('div')`
  position: absolute;
  border-radius: 10px;
  height: 150px;
  width: 150px;
`

export default class RoomIcon extends Component {
  componentDidMount () {
    let svg = jdenticon.toSvg(this.props.room.sid, 150)
    let div = document.getElementById('icon' + this.props.room.sid)
    div.innerHTML = svg
  }

  render () {
    let title = this.props.room.id + ' - ' + this.props.room.name
    return (
      <Container>
        <SvgContainer id={'icon' + this.props.room.sid} />
        <Fade />
        <div className={style}>{title}</div>
        <DeleteButton id={this.props.room.id} query={this.props.query} />
        <ConnectButton id={this.props.room.id} name={this.props.name} changeRoom={this.props.changeRoom} />
      </Container>
    )
  }
}
