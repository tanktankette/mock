/*
  Participant:
    This component manages the audio and video tracks for a participant of a room.
    Props:
      primary (optional - defaults to false):
        Denotes whether or not this participant is the primary participant
        If set to true, this component will size up to the height of the screen and center itself
*/
import React, { Component } from 'react'
import { css } from 'emotion'

const primaryStyling = css`
  height: 100%;
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
`

const secondaryStyling = css`
  height: 100%;
  margin-left: 10px;
`

// The video for some reason creates 4 pixels of blank space beneath it
// when it's height is set to 100%
const videoStyling = css`
  height: 100%;
  margin-bottom: -5px;
`

export default class Participant extends Component {
  attachTracks (tracks, container) {
    tracks.forEach((track) => {
      let element = track.attach()
      element.classList.add(videoStyling)
      container.appendChild(element)
    })
  }

  detachTrack (track) {
    track.detach().forEach((detachedElement) => {
      detachedElement.remove()
    })
  }

  componentDidMount () {
    let container = document.getElementById('container' + this.props.participant.sid)
    this.attachTracks(this.props.participant.tracks, container)
    this.props.participant.on('trackSubscribed', track => { this.attachTracks([track], container) })
    this.props.participant.on('trackUnsubscribed', track => { this.detachTrack(track, container) })
  }

  render () {
    return (
      <div
        className={this.props.primary ? primaryStyling : secondaryStyling}
        id={'container' + this.props.participant.sid}
      />
    )
  }
}
