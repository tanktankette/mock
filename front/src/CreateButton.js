/*
  CreateButton:
    A button that creates a new room. Room name is currently hardcoded to 'hi'
    Props:
      query (required):
        Takes in the Rooms query from RoomMenu so that it can be updated when the mutation finishes
*/
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const createRoom = gql`
mutation CreateRoom($name: String!){
  createRoom(name:$name){
    id
    sid
    name
  }
}`

export default class CreateButton extends Component {
  render () {
    return (
      <Mutation
        mutation={createRoom}
        update={(cache, { data: { createRoom } }) => {
          const { rooms } = cache.readQuery({ query: this.props.query })
          cache.writeQuery({
            query: this.props.query,
            data: { rooms: rooms.concat([createRoom]) }
          })
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
