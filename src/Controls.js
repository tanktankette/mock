import React, { Component } from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'

const Container = styled('div')`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: start;
  justify-content: space-around;
  width: 350px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: black;
`

const controlStyling = css`
  width: 32px;
  padding: 5px;
  &:hover {
    background-color: grey;
  };
`

export default class Controls extends Component {
  render () {
    return (
      <Container>
        <img src='person.png' class={controlStyling} />
        <img src='microphone.png' class={controlStyling} />
        <img src='video.png' class={controlStyling} />
        <img src='signal.png' class={controlStyling} />
        <img src='settings.png' class={controlStyling} />
        <img src='phone.png' class={controlStyling} />
      </Container>
    )
  }
}
