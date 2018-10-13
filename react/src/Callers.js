import React, { Component } from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'

const Container = styled('div')`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: row;
  justify-self: end;
  align-self: end;
  justify-content: flex-end;
  margin: 20px;
`

const callerStyling = css`
  width: 64px;
  padding: 10px;
  &:hover {
    background-color: grey;
  };
`

export default class Callers extends Component {
  render () {
    let callers = Array(3).fill(<img src='caller.png' className={callerStyling} alt='' />)
    return (
      <Container>
        {callers}
      </Container>
    )
  }
}
