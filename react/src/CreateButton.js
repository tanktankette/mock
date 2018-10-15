import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const createRoom = gql`
mutation CreateRoom($name: String!){
  createRoom(name:$name){
    id
  }
}`

export default class CreateButton extends Component {
  render () {
    return (
      <Mutation
        mutation={createRoom}
        onCompleted={(data) => {
          this.props.changeRoom({target: {value: data.createRoom.id}})
        }}
      >
        {(CreateRoom, { data }) => (
          <button onClick={() => { CreateRoom({ variables: { name: 'hi' } }) }} >
            Create
          </button>
        )}
      </Mutation>
    )
  }
}
