import React, { Component } from 'react'
import styled from 'react-emotion'
// import { css } from 'emotion'

const Container = styled('div')`
  position: absolute;
  bottom: 20px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-self: end;
  align-self: end;
  justify-content: flex-end;
  margin: 20px;
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
