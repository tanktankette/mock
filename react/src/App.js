import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Controls from './Controls'
import Callers from './Callers'
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

class App extends Component {
  render () {
    return (
      <Container>
        <Video />
        <Controls />
        <Sidebar />
        <Callers />
      </Container>
    )
  }
}

export default App
