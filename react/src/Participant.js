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

// The video for some reason create 4 pixels of blank space beneath it when I set it's height to 100%
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
