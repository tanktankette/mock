// import './secret.js'
import React, { Component } from 'react'
import styled from 'react-emotion'
import Participant from './Participant'
import Callers from './Callers'
const { connect } = require('twilio-video')

const Container = styled('div')`
  position: absolute;
  height: 100%;
  width: 100%;
`

export default class Video extends Component {
  constructor (props) {
    super(props)
    this.state = {
      room: null,
      participants: null,
      localVideo: true,
      localAudio: true,
      disconnected: false
    }
    this.roomJoined = this.roomJoined.bind(this)
  }

  roomJoined (room) {
    console.log('connected')
    this.setState({
      room: room,
      participants: room.participants
    })

    room.on('participantConnected', participant => {
      let newParticpants = this.state.participants
      newParticpants.set(participant.sid, participant)
      this.setState({participants: newParticpants})
      console.log("Joining: '" + participant.identity + "'")
    })

    room.on('participantDisconnected', participant => {
      let newParticpants = this.state.participants
      newParticpants.delete(participant.sid)
      this.setState({participants: newParticpants})
      console.log("Participant '" + participant.identity + "' left the room")
    })

    room.on('disconnected', (room, error) => {
      console.log(error)
    })
  }

  componentDidMount () {
    connect(this.props.token, {
      name: this.props.sid,
      video: this.state.localVideo,
      audio: this.state.localAudio
    })
      .then(this.roomJoined)
      .catch(console.log)
  }

  componentWillUnmount () {
    if (this.state.room) this.state.room.disconnect()
  }

  render () {
    let participants
    let primary
    if (this.state.participants) {
      participants = Array.from(this.state.participants.values()).map(participant => {
        return <Participant participant={participant} key={participant.identity} />
      })
      primary = participants.shift()
      console.log(primary)
    }
    return (
      <Container>
        {primary}
        <Callers participants={participants} />
      </Container>
    )
  }
}

// disconnect on leaving page
