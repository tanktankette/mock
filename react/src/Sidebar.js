import React, { Component } from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'

const Container = styled('div')`
  grid-area: 1 / 1 / 3 / 2;
  display: flex;
  flex-direction: column;
  align-content: end;
  background-color: black;
  height: 100vh;
`

const sideStyling = css`
  width: 64px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  &:hover {
    background-color: grey;
  };
`

export default class Sidebar extends Component {
  render () {
    return (
      <Container>
        <img src='chat.png' className={sideStyling} alt='' />
        <img src='share.png' className={sideStyling} alt='' />
        <img src='camera.png' className={sideStyling} alt='' />
        <img src='lifesaver.png' className={sideStyling} alt='' />
        <img src='options.png' className={sideStyling} alt='' />
      </Container>
    )
  }
}
