import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Controls from './Controls'
import Video from './Video'
import styled from 'react-emotion'

const Container = styled('div')`
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: auto auto;
  grid-template-areas: 
    "sidebar buttons"
    "sidebar callers";
`

export default class Call extends Component {
  render () {
    return (
      <Container>
        <Video sid={this.props.room.sid} token={this.props.token} />
        <Controls changeRoom={this.props.changeRoom} />
        <Sidebar />
      </Container>
    )
  }
}
