import React, { Component } from 'react'
import styled from 'react-emotion'
// import { css } from 'emotion'

const Container = styled('div')`
  position: absolute;
  bottom: 20px;
  width: 95vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 100px;
`

// const callerStyling = css`
//   width: 64px;
//   padding: 10px;
//   &:hover {
//     background-color: grey;
//   };
// `

export default class Callers extends Component {
  render () {
    return (
      <Container>
        {this.props.participants}
      </Container>
    )
  }
}
