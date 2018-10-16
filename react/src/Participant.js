import React, { Component } from 'react'
// import styled from 'react-emotion'
// import { css } from 'emotion'

// const Container = styled('div')`
//   grid-area: 2 / 2 / 3 / 3;
//   display: flex;
//   flex-direction: row;
//   justify-self: end;
//   align-self: end;
//   justify-content: flex-end;
//   margin: 20px;
// `

// const callerStyling = css`
//   width: 64px;
//   padding: 10px;
//   &:hover {
//     background-color: grey;
//   };
// `

export default class Participant extends Component {
  attachTracks (tracks, container) {
    tracks.forEach((track) => {
      container.appendChild(track.attach())
    })
  }

  detachTrack (track) {
    track.detach().forEach((detachedElement) => {
      detachedElement.remove()
    })
  }

  componentDidMount () {
    let container = document.getElementById('container')
    this.attachTracks(this.props.participant.tracks, container)
    this.props.participant.on('trackSubscribed', track => { this.attachTracks([track], container) })
    this.props.participant.on('trackUnsubscribed', track => { this.detachTrack(track, container) })
  }

  render () {
    return (
      <div id='container' />
    )
  }
}
