/*
  Controls:
    This component hold various buttons for controlling the call. Only the hangup button has
    functionalty at the moment.
    Props:
      disconnectFromRoom (required):
        A required function that is passed to the hangup button so that the user can
        disconnect from a room
*/
import React, { Component } from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'

const Container = styled('div')`
  position: absolute;
  left: 50vw;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 350px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: black;
`

const controlStyling = css`
  width: 32px;
  height: 32px;
  padding: 5px;
  &:hover {
    background-color: grey;
  };
`

export default class Controls extends Component {
  constructor (props) {
    super(props)
    this.disconnectFromRoom = this.disconnectFromRoom.bind(this)
  }

  disconnectFromRoom () {
    this.props.changeRoom(null)
  }

  render () {
    return (
      <Container>
        <img src='person.png' className={controlStyling} alt='' />
        <img src='microphone.png' className={controlStyling} alt='' />
        <img src='video.png' className={controlStyling} alt='' />
        <img src='signal.png' className={controlStyling} alt='' />
        <img src='settings.png' className={controlStyling} alt='' />
        <img src='phone.png' onClick={this.disconnectFromRoom} className={controlStyling} alt='' />
      </Container>
    )
  }
}
