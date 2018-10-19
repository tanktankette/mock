import React, { Component } from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'

const Container = styled('div')`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100vh;
  width: 100px;
  transition: 1s;
`

const Detector = styled('div')`
  position: absolute;
  height: 100vh;
  width: 100px;
`

const hideStyling = css`
  left: -100px;
`

const sideStyling = css`
  width: 64px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  margin-top: 8px;
  &:hover {
    background-color: grey;
  };
`

export default class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }
  show () { this.setState({show: true}) }
  hide () { this.setState({show: false}) }
  render () {
    return (
      <Detector onMouseOver={this.show} onMouseLeave={this.hide}>
        <Container className={this.state.show ? null : hideStyling}>
          <img src='chat.png' className={sideStyling} alt='' />
          <img src='share.png' className={sideStyling} alt='' />
          <img src='camera.png' className={sideStyling} alt='' />
          <img src='lifesaver.png' className={sideStyling} alt='' />
          <img src='options.png' className={sideStyling} alt='' />
        </Container>
      </Detector>
    )
  }
}
