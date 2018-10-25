import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { css } from 'emotion'

const style = css`
  position: relative;
  top: 59px;
  left: 60px;
`

const connectToRoom = gql`
mutation ConnectToRoom($id:ID!, $name: String!){
  connectToRoom(id:$id, name:$name){
    room{
      sid
      name
    }
    token
  }
}`

export default class ConnectButton extends Component {
  render () {
    return (
      <Mutation
        mutation={connectToRoom}
        onCompleted={(data) => {
          this.props.changeRoom(data.connectToRoom)
        }}
      >
        {(ConnectToRoom, { data }) => (
          <button className={style} disabled={!this.props.name} onClick={() => ConnectToRoom({ variables: {
            name: this.props.name,
            id: this.props.id
          } })}>
            Connect
          </button>
        )}
      </Mutation>
    )
  }
}
