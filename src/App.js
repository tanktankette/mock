import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='grid'>
        <div id='video' />
        <div id='buttons'>
          <img src='person.png' class='top-button hoverable' />
          <img src='microphone.png' class='top-button hoverable' />
          <img src='video.png' class='top-button hoverable' />
          <img src='signal.png' class='top-button hoverable' />
          <img src='settings.png' class='top-button hoverable' />
          <img src='phone.png' class='top-button hoverable' />
        </div>
        <div id='sidebar'>
          <img src='chat.png' class='side-button hoverable' />
          <img src='share.png' class='side-button hoverable' />
          <img src='camera.png' class='side-button hoverable' />
          <img src='lifesaver.png' class='side-button hoverable' />
          <img src='options.png' class='side-button hoverable' />
        </div>
        <div id='callers'>
          <img src='caller.png' class='caller hoverable' />
          <img src='caller.png' class='caller hoverable' />
        </div>
      </div>
    )
  }
}

export default App
