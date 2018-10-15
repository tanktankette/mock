// import './secret.js'
import React, { Component } from 'react'
import styled from 'react-emotion'
const { connect, createLocalTracks } = require('twilio-video')

const Container = styled('div')`
  background-image: url("/background.jpg");
  background-size: cover;
  grid-area: 1 / 1 / 3 / 3;
`

export default class Video extends Component {
  componentWillMount () {
    connect(this.props.token, {
      name: this.props.sid,
      audio: true
    }).then(room => {
      console.log('connected')
      room.on('participantConnected', participant => { console.log('Whoa! Someone joined!') })
      room.on('disconnected', (room, error) => { console.log(error) })
      console.log(room)
      console.log(room.localParticipant.sid)
    })
  }

  render () {
    return (
      <Container />
    )
  }
}

// disconnect on leaving page
