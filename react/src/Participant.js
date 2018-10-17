import React, { Component } from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'

const Container = styled('div')`
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  height: 100%;
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
    let container = document.getElementById('container')
    this.attachTracks(this.props.participant.tracks, container)
    this.props.participant.on('trackSubscribed', track => { this.attachTracks([track], container) })
    this.props.participant.on('trackUnsubscribed', track => { this.detachTrack(track, container) })
  }

  render () {
    return (
      <Container id='container' />
    )
  }
}
