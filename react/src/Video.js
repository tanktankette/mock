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
  constructor (props) {
    super(props)
    this.state = {
      room: null
    }
    this.attachParticipantTracks = this.attachParticipantTracks.bind(this)
    this.detachParticipantTracks = this.detachParticipantTracks.bind(this)
    this.roomJoined = this.roomJoined.bind(this)
  }

  attachTracks (tracks, container) {
    tracks.forEach((track) => {
      container.appendChild(track.attach())
    })
  }

  attachParticipantTracks (participant, container) {
    var tracks = Array.from(participant.tracks.values())
    this.attachTracks(tracks, container)
  }

  detachTracks (tracks) {
    tracks.forEach((track) => {
      track.detach().forEach((detachedElement) => {
        detachedElement.remove()
      })
    })
  }

  detachParticipantTracks (participant) {
    var tracks = Array.from(participant.tracks.values())
    this.detachTracks(tracks)
  }

  roomJoined (room) {
    console.log('connected')
    this.setState({room: room})

    room.participants.forEach(participant => {
      console.log("Already in Room: '" + participant.identity + "'")
      let remoteTracksContainer = document.getElementById('remoteTracksContainer')
      this.attachParticipantTracks(participant, remoteTracksContainer)
    })

    room.on('participantConnected', participant => {
      console.log("Joining: '" + participant.identity + "'")
    })

    room.on('trackAdded', (track, participant) => {
      console.log(participant.identity + ' added track: ' + track.kind)
      let remoteTracksContainer = document.getElementById('remoteTracksContainer')
      this.attachTracks([track], remoteTracksContainer)
    })

    room.on('trackRemoved', (track, participant) => {
      console.log(participant.identity + ' removed track: ' + track.kind)
      this.detachTracks([track])
    })

    room.on('participantDisconnected', participant => {
      console.log("Participant '" + participant.identity + "' left the room")
      this.detachParticipantTracks(participant)
    })

    room.on('disconnected', (room, error) => {
      console.log(error)
      room.participants.forEach(this.detachParticipantTracks)
    })
  }

  componentDidMount () {
    connect(this.props.token, {
      name: this.props.sid,
    })
      .then(this.roomJoined)
  }

  componentWillUnmount () {
    this.state.room.disconnect()
  }

  render () {
    return (
      <Container>
        <div id='remoteTracksContainer' />
      </Container>
    )
  }
}

// disconnect on leaving page
