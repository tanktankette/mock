import React, { Component } from 'react'
import styled from 'react-emotion'
// const { connect, createLocalTracks } = require('twilio-video')

const Container = styled('div')`
  background-image: url("/background.jpg");
  background-size: cover;
  grid-area: 1 / 1 / 3 / 3;
`

export default class Video extends Component {
  render () {
    return (
      <Container />
    )
  }
}

// disconnect on leaving page
