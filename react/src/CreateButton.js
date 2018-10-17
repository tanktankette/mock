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
